import * as FileSaver from 'file-saver'
import { office } from './office'
import { IExportData } from '../types/custom'

const type = 'xls'
const charset = `application/vnd.ms-excel`

export function exportXLS(filename: string, data: IExportData[]) {
  const exportData = office(data, charset, type)
  FileSaver.saveAs(
    new Blob([exportData], {
      type: charset
    }), `${filename}.${type}`
  )
}
