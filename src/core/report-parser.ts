import XLSX from "xlsx";
import { parseDate, readFileAsArrayBuffer } from "./utils";

export interface ReportPaymentData {
  date: Date
  operationId: string
  fullAmount: number
  servicesAmount?: number
  peniAmount?: number
}

class ReportParsingError extends Error {}

export class ReportParser {
  private static _CONTENT_START_ROW = 13;

  /**
   * Парисинг одной строки отчета.
   * @param workSheet xlsx-страница с даннными.
   * @param rowNumber номер строки для парсинга.
   */
  private static _parseRow(workSheet: XLSX.WorkSheet, rowNumber: number): ReportPaymentData | undefined {
    // Получаем адрес ячейки с суммой платежа.
    const fullAmountCell = XLSX.utils.encode_cell({ c: 24, r: rowNumber });
    const fullAmount = workSheet[fullAmountCell]?.v;

    // Если сумма платежа равна 0, то пропускаем такой платеж.
    if (!fullAmount || fullAmount === 0) {
      return;
    }

    // Получаем адреса ячеек с датой, суммой по услугам, суммой по пени платежа и ID операции.
    const dateCell = XLSX.utils.encode_cell({ c: 11, r: rowNumber }),
      operationIdCell = XLSX.utils.encode_cell({ c: 18, r: rowNumber }),
      servicesAmountCell = XLSX.utils.encode_cell({ c: 29, r: rowNumber }),
      peniAmountCell = XLSX.utils.encode_cell({ c: 31, r: rowNumber });

    // Плучаем данные из отчета.
    const paymentDate = workSheet[dateCell] && parseDate(workSheet[dateCell].v),
      operationId = workSheet[operationIdCell]?.v,
      servicesAmount = workSheet[servicesAmountCell]?.v,
      peniAmount = workSheet[peniAmountCell]?.v;

    // Валидация значений данных.
    if (!paymentDate || isNaN(paymentDate.getTime()))
      throw new ReportParsingError(`${dateCell} - Некорретный формат даты (DD.MM.YYY).`);

    if (!operationId) throw new ReportParsingError(`${operationIdCell} - Не указан идентификатор операции.`);

    if (!servicesAmount && !peniAmount)
      throw new ReportParsingError(
        `${servicesAmountCell} и ${peniAmountCell} - Нет информации по оплате услуг и пени.`
      );

    return {
      date: paymentDate,
      fullAmount,
      servicesAmount,
      peniAmount,
      operationId
    };
  }

  /**
   * Парсинг файла отчета. Возвращает данные по платежам.
   * @param reportFile файл отчета.
   */
  static async parse(reportFile: File): Promise<ReportPaymentData[]> {
    // Читаем содержимое файла и преобразуем к Uint8Array для работы с XLSX.
    const reportFileArrayBuffer = await readFileAsArrayBuffer(reportFile);
    const reportFileData = new Uint8Array(reportFileArrayBuffer);

    // Парсим xlsx-файл и получаем первую страницу.
    const workBook = XLSX.read(reportFileData, { type: "array" });
    const sheetName = workBook.SheetNames[0];
    const workSheet = workBook.Sheets[sheetName];

    // Получаем диапазон ячеек с данными.
    const range = XLSX.utils.decode_range(workSheet["!ref"]!);

    // Если нет данных в сроке где они должны начинаться, то выкидываем ошибку.
    if (range.e.r < this._CONTENT_START_ROW) {
      throw new ReportParsingError("Отчет не заполнен данными.");
    }

    // Переменная для хранения результатов.
    const results: ReportPaymentData[] = [];

    // Итерируемся по строкам начиная с this._CONTENT_START_ROW.
    for (let currentRow = this._CONTENT_START_ROW; currentRow <= range.e.r; currentRow++) {
      const paymentData = this._parseRow(workSheet, currentRow);

      if (paymentData) {
        results.push(paymentData);
      }
    }

    return results;
  }
}
