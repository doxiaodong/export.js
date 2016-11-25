import { IExportData } from '../types/custom'

let rowID = 0

export function xml(data: IExportData[]): string {
  let xml = '<?xml version="1.0" encoding="utf-8"?>'
  data.forEach((d) => {
    xml += '<table>'
    if (d.th) {
      const joinTh = d.th.join('</column><column>')
      xml += `
        <row id="${rowID++}">
          <column>
          ${joinTh}
          </column>
        </row>
      `
    }

    const tds = d.td.map((td) => {
      return `<column">${td.join('</column><column>')}</column>`
    })
    xml += `
       <row id="${rowID++}">
        ${tds.join('</row><row id="' + rowID++ + '">')}    
      </row>
    `

    xml += '</table>'
  })

  return xml
}
