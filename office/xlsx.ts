import * as FileSaver from 'file-saver'
import { office } from './office'
import { IExportData } from '../types/custom'

const type = 'xlsx'
const charset = `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`

export function exportXLSX(filename: string, data: IExportData[]) {
  const exportData = office(data, charset, type)
  FileSaver.saveAs(
    new Blob([exportData], {
      type: charset
    }), `${filename}.${type}`
  )
}
