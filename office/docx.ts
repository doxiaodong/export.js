import * as FileSaver from 'file-saver'
import { office } from './office'
import { IExportData } from '../types/custom'

const type = 'docx'
const charset = `application/vnd.openxmlformats-officedocument.wordprocessingml.document`

export function exportDOCX(filename: string, data: IExportData[]) {
  const exportData = office(data, charset, type)
  FileSaver.saveAs(
    new Blob([exportData], {
      type: charset
    }), `${filename}.${type}`
  )
}
