import * as FileSaver from 'file-saver'
import { CSV } from './csv'
import { IExportData } from '../types/custom'

const type = 'csv'
const charset = `csv/txt;charset=${document.characterSet}`

export function exportCSV(filename: string, data: IExportData[]) {
  const exportData = CSV(data)
  FileSaver.saveAs(
    new Blob([exportData], {
      type: charset
    }), `${filename}.${type}`
  )
}
