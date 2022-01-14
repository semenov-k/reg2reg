import xml from 'xml2js';
import moment from 'moment';
import { ReportPaymentData } from './report-parser';
import { getStringSizeInBytes } from './utils';
import JSZip from 'jszip';
import { NDSCalc, NDSType } from './nds-calc';

/**
 * Типы систем налогооблажения.
 */
export enum SNOTypes {
  OSN = 'osn',
  USN_INCOME = 'usn_income',
  USN_INCOME_OUTCOME = 'usn_income_outcome',
  ENVD = 'envd',
  ESN = 'esn',
  PATENT = 'patent',
}

export class AtolXMLBuilder {
  // Ограничение 2 MB, но для удобства расчета сделал 1.9.
  private _MAX_XML_FILE_SIZE = 1.8 * 10 ** 6;

  constructor(
    private _companyEmail: string,
    private _companyInn: string,
    private _checkEmail: string,
    private _companySno: SNOTypes,
    private _companyPaymentAddress: string
  ) { }
  
  /**
   * Сборка ZIP архива с XML-фалами, содержащими платежи для фискализации. 
   * @param paymentsData платежи для фискализации. 
   * @returns zip-архив.
   */
  async build(paymentsData: ReportPaymentData[]): Promise<File> {
    // Содержимое файлов будем складывать в массив.
    let currentFileIndex = 0;
    const filesContent: ReportPaymentData[][] = [];

    // Начальный вес первого файла.
    let currentFileSize = 0;

    const xmlBuilder = new xml.Builder({
      xmldec: {
        version: "1.0",
        encoding: "UTF-8",
        standalone: undefined
      }
    });

    for (let paymentData of paymentsData) {
      // Получаем объект чека для сериализации.
      const checkObject = this._buildCheck(paymentData);

      // Сериализуем его в XML.
      const checkXml = xmlBuilder.buildObject(checkObject);

      // Считаем размер получившегося чека.
      const checkXmlSize = getStringSizeInBytes(checkXml);

      // Если мы добавим чек в текущий файл, будет ли файл больше this._MAX_XML_FILE_SIZE?
      if (currentFileSize + checkXmlSize > this._MAX_XML_FILE_SIZE) {
        // Если да, то добавляем чек в следующий пустой файл.
        currentFileIndex++;
        currentFileSize = checkXmlSize;
        filesContent[currentFileIndex] = [paymentData]
      } else {
        // Если нет, то добавляем его в текущий.
        currentFileSize += checkXmlSize;
        if (filesContent[currentFileIndex] === undefined) {
          filesContent[currentFileIndex] = [];
        }
        filesContent[currentFileIndex].push(paymentData);
      }
    }

    const resultZip = new JSZip();

    // Зипуем все файлы из массива XML-файлов. Формат N.xml, где N - номер файла.
    for (let i = 0; i < filesContent.length; i++) {
      resultZip.file(
        `${i + 1}.xml`,
        xmlBuilder.buildObject(
          this._buildFileObject(filesContent[i])
        )
      )
    }

    // Генерируем и возвращаем конечный файл result.zip.
    const resultBlob = await resultZip.generateAsync({ type: 'blob' });
    return new File([resultBlob], 'result.zip');
  }

  /**
   * Формирование содержимого целого файла.
   * @param paymentsData платежи для фискализации.
   * @returns объект с содержимым файла.
   */
  private _buildFileObject(paymentsData: ReportPaymentData[]): object {
    const fileObject = {
      main: paymentsData.map((paymentData) => (this._buildCheck(paymentData)))
    };

    return fileObject;
  }

  /**
   * Формирование объекта позиции в чеке.
   * @param serviceName название позиции (услуги)ю
   * @param amount сумма.
   * @param vatType тип НДС.
   * @returns объект позиции в чеке.
   */
  private _buildPaymentItem(serviceName: string, amount: number, vatType: NDSType): object {
    return {
      name: serviceName,
      price: amount.toFixed(2),
      quantity: 1,
      sum: amount.toFixed(2),
      measurement_unit: "мес.",
      payment_method: "full_payment",
      payment_object: "service",
      vat: {
        type: vatType,
        ...(vatType !== NDSType.none ? { sum: NDSCalc.calcFor(vatType, amount)!.toFixed(2) } : {})
      }
    }
  }

  /**
   * Формирование объекта одного чека (платежа).
   * @param paymentData данные платежа.
   * @returns объект чека.
   */
  private _buildCheck(paymentData: ReportPaymentData): object {
    return {
      check: {
        timestamp: `${moment(paymentData.date).format("DD.MM.YYYY")} 14:00:00`,
        external_id: paymentData.operationId,
        is_bso: false,
        receipt: {
          operation: "sell",
          client: {
            // Тут уточнить
            email: this._checkEmail
          },
          company: {
            email: this._companyEmail,
            inn: this._companyInn,
            sno: this._companySno,
            payment_address: this._companyPaymentAddress
          },
          items: {
            item: [
              ...(paymentData.servicesAmount
                ? [this._buildPaymentItem("Оплата ЖКУ", paymentData.servicesAmount, NDSType.vat120)]
                : []),
              ...(paymentData.peniAmount
                ? [this._buildPaymentItem("Пени", paymentData.peniAmount, NDSType.none)]
                : [])
            ]
          },
          payments: {
            payment: {
              type: 1,
              sum: paymentData.fullAmount.toFixed(2)
            }
          },
          vats: {
            vat: {
              type: paymentData.servicesAmount ? NDSType.vat120 : NDSType.none,
              sum: paymentData.servicesAmount ? NDSCalc.calcFor(NDSType.vat120, paymentData.servicesAmount)!.toFixed(2) : "0.00"
            }
          },
          total: paymentData.fullAmount.toFixed(2)
        }
      }
    }
  }
}