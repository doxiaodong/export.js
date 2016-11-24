import { IExportData } from '../types/custom'

export function office(data: IExportData[], charset: string, type: string) {
  let table = ''
  data.forEach((d) => {
    if (d.th) {
      const joinTh = d.th.join('</th><th>')
      table += `
          <thead><tr>
            <th>
            ${joinTh}
            </th>
          </tr></thead>
        `
    }

    const tds = d.td.map((td) => {
      return `<td style="vnd.ms-excel.numberformat:@">${td.join('</td><td style="vnd.ms-excel.numberformat:@">')}</td>`
    })

    table += `
        <tbody><tr>
        ${tds.join('</tr><tr>')}    
        </tr></tbody>
      `
  })

  const template = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:${type}" xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="${charset}" /><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>
      表格1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
      </head>
      <body>
      <table>${table}</table>
      </body>
    </html>
  `

  return template
}
