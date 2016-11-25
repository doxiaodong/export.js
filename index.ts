import { exportCSV } from './csv'
import { exportTXT } from './txt'
import {
  exportDOC,
  exportDOCX,
  exportXLS,
  exportXLSX
} from './office'
import { exportXML } from './xml'

export * from './csv'
export * from './txt'
export * from './office'
export * from './xml'

export interface IExp {
  [key: string]: any
}

export const exp: IExp = {
  csv: exportCSV,
  txt: exportTXT,

  doc: exportDOC,
  docx: exportDOCX,
  xls: exportXLS,
  xlsx: exportXLSX,

  xml: exportXML
}

global['exp'] = exp
if (typeof global['define'] === 'function' && global['define'].amd) {
  global['define']('exp', [], function() { return exp })
}
