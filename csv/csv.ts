import { IExportData } from '../types/custom'

const CSVConfig = {
  delimiter: ',',
  newLine: '\r\n'
}

export function CSV(data: IExportData[]): string {
  let ret = '\uFEFF' // fix unicode show error
  data.forEach((d) => {
    // th
    if (d.th) {
      const newTh = d.th.map((value) => fixCSVField(value))
      let thLine = newTh.join(CSVConfig.delimiter) + CSVConfig.newLine
      ret += thLine
    }
    // td
    const tds = d.td.map((td) => {
      const newTd = td.map((value) => fixCSVField(value))
      return newTd.join(CSVConfig.delimiter)
    })
    let tdLines = tds.join(CSVConfig.newLine) + CSVConfig.newLine
    ret += tdLines
  })

  return ret
}

function fixCSVField(value: string): string {
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
