import * as FileSaver from 'file-saver'
import { xml } from './xml'
import { IExportData } from '../types/custom'

const type = 'xml'
const charset = `application/xml`

export function exportXML(filename: string, data: IExportData[]) {
  const exportData = xml(data)
  FileSaver.saveAs(
    new Blob([exportData], {
      type: charset
    }), `${filename}.${type}`
  )
}
