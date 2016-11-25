import * as FileSaver from 'file-saver'
import { office } from './office'
import { IExportData } from '../types/custom'

const type = 'doc'
const charset = `application/msword`

export function exportDOC(filename: string, data: IExportData[]) {
  const exportData = office(data, charset, type)
  FileSaver.saveAs(
    new Blob([exportData], {
      type: charset
    }), `${filename}.${type}`
  )
}
