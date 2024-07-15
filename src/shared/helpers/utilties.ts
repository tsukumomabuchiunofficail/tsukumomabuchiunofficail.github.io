
import * as XLSX from 'xlsx';
import axios from 'axios';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
export function cast<T>(param: any): T {
  return typeof param === 'object' && !Array.isArray(param) && param != null
    ? (Object.assign({}, param) as T)
    : (param as T);
}

export function isNullOrEmpty(str?: string): boolean {
  return !(str && str.length > 0);
}


export function randomInteger(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export  function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function readExcelFromUrl(url:string) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    const data = new Uint8Array(response.data);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    return jsonData;
  } catch (error) {
    console.error('Error fetching or parsing Excel file:', error);

    return undefined
  }
}