import * as FileSaver from 'file-saver'
import { CSV } from '../csv/csv'
import { IExportData } from '../types/custom'

const type = 'txt'
const charset = `csv/txt;charset=${document.characterSet}`

export function exportTXT(filename: string, data: IExportData[]) {
  const exportData = CSV(data)
  FileSaver.saveAs(
    new Blob([exportData], {
      type: charset
    }), `${filename}.${type}`
  )
}
