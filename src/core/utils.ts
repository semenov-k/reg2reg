/**
 * Парсинг РУ даты DD.MM.YYYY
 * @param dateString строка типа "DD.MM.YYYY"
 */
 export const parseDate = (dateString: String): Date => {
  const [day, month, year] = dateString.split('.');
  const date = new Date(`${month}/${day}/${year}`)

  return date;
}

/**
 * Promise-like чтение файла как ArrayBuffer.
 * @param file файл для чтения.
 */
export const readFileAsArrayBuffer = async (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => resolve(e.target!.result as ArrayBuffer);
    fileReader.onerror = (e) => reject(e.target!.error)
    fileReader.readAsArrayBuffer(file);
  });
}

/**
 * Вычистяет размер строки в байтах.
 * @param str строка.
 */
export const getStringSizeInBytes = (str: string): number => {
  const textEncoder = new TextEncoder();
  
  return textEncoder.encode(str).length;
} 