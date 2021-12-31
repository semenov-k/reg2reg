import xml from 'xml2js';
import moment from 'moment';
import { ReportPaymentData } from './report-parser';
import { getStringSizeInBytes } from './utils';
import JSZip from 'jszip';

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
    private _companySno: SNOTypes,
    private _companyPaymentAddress: string
  ) { }

  async build(paymentsData: ReportPaymentData[]): Promise<File> {
    let currentFileIndex = 0;
    let currentFileSize = 0;
    const filesContent: ReportPaymentData[][] = [];

    const xmlBuilder = new xml.Builder({
      xmldec: {
        version: "1.0",
        encoding: "UTF-8",
        standalone: undefined
      }
    });

    for (let paymentData of paymentsData) {
      const checkObject = this._buildCheck(paymentData);
      const checkXml = xmlBuilder.buildObject(checkObject);
      const checkXmlSize = getStringSizeInBytes(checkXml);

      if (currentFileSize + checkXmlSize > this._MAX_XML_FILE_SIZE) {
        currentFileIndex++;
        currentFileSize = checkXmlSize;
        filesContent[currentFileIndex] = [paymentData]
      } else {
        currentFileSize += checkXmlSize;
        if (filesContent[currentFileIndex] === undefined) {
          filesContent[currentFileIndex] = [];
        }
        filesContent[currentFileIndex].push(paymentData);
      }
    }

    const resultZip = new JSZip();

    for (let i = 0; i < filesContent.length; i++) {
      resultZip.file(
        `${i + 1}.xml`,
        xmlBuilder.buildObject(
          this._buildFileObject(filesContent[i])
        )
      )
    }

    const resultBlob = await resultZip.generateAsync({ type: 'blob' });
    return new File([resultBlob], 'result.zip');
  }

  private _buildFileObject(paymentsData: ReportPaymentData[]): object {
    const fileObject = {
      main: paymentsData.map((paymentData) => (this._buildCheck(paymentData)))
    };

    return fileObject;
  }

  private _buildPaymentItem(serviceName: string, amount: number): object {
    return {
      name: serviceName,
      price: amount.toFixed(2),
      quantity: 1,
      sum: amount.toFixed(2),
      measurement_unit: "мес.",
      payment_method: "full_payment",
      payment_object: "service",
      vat: {
        type: "none"
      }
    }
  }

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
            email: this._companyEmail
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
                ? [this._buildPaymentItem("Оплата ЖКУ", paymentData.servicesAmount)]
                : []),
              ...(paymentData.peniAmount
                ? [this._buildPaymentItem("Пени", paymentData.peniAmount)]
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
              type: "none",
              sum: "0.00"
            }
          },
          total: paymentData.fullAmount.toFixed(2)
        }
      }
    }
  }
}