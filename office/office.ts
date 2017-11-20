import { IExportData } from '../types/custom'

export function office(data: IExportData[], charset: string, type: string): string {
  let tables = ''
  data.forEach((d) => {
    tables += '<table>'
    if (d.th) {
      const joinTh = d.th.join('</th><th>')
      tables += `
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

    tables += `
        <tbody><tr>
        ${tds.join('</tr><tr>')}    
        </tr></tbody>
      `
    tables += '</table>'
  })

  const template = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:${type}" 
      xmlns="http://www.w3.org/TR/REC-html40">
      <head>
      <meta content="${charset}" />
      <!--[if gte mso 9]>
      <xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>表格1</x:Name>
      <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
      </x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook>
      </xml>
      <![endif]-->
      </head>
      <body>
      ${tables}
      </body>
    </html>
  `

  return template
}
