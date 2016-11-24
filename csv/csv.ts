import { IExportData } from '../types/custom'

const CSVConfig = {
  delimiter: ',',
  newLine: '\r\n'
}

export function CSV(data: IExportData[]) {
  let ret = ''
  data.forEach((d) => {
    // th
    let thLine = d.th.join(CSVConfig.delimiter) + CSVConfig.newLine
    ret += thLine
    // td
    const tds = d.td.map((td) => {
      return td.join(CSVConfig.delimiter)
    })
    let tdLines = tds.join(CSVConfig.newLine) + CSVConfig.newLine
    ret += tdLines
  })

  return ret
}

function fixCSVField(value: string) {
  const addQuotes = (value.indexOf(',') !== -1) || (value.indexOf('\r') !== -1) || (value.indexOf('\n') !== -1)
  const replaceDoubleQuotes = (value.indexOf('"') !== -1)
  if (replaceDoubleQuotes) {
    value = value.replace(/"/g, '""')
  }
  if (addQuotes || replaceDoubleQuotes) {
    value = `"${value}"`
  }
  return '\t' + value
}
