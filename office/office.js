"use strict";
function office(data, charset, type) {
    var tables = '';
    data.forEach(function (d) {
        tables += '<table>';
        if (d.th) {
            var joinTh = d.th.join('</th><th>');
            tables += "\n          <thead><tr>\n            <th>\n            " + joinTh + "\n            </th>\n          </tr></thead>\n        ";
        }
        var tds = d.td.map(function (td) {
            return "<td style=\"vnd.ms-excel.numberformat:@\">" + td.join('</td><td style="vnd.ms-excel.numberformat:@">') + "</td>";
        });
        tables += "\n        <tbody><tr>\n        " + tds.join('</tr><tr>') + "    \n        </tr></tbody>\n      ";
        tables += '</table>';
    });
    var template = "\n    <html xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:x=\"urn:schemas-microsoft-com:office:" + type + "\" \n      xmlns=\"http://www.w3.org/TR/REC-html40\">\n      <head>\n      <meta content=\"" + charset + "\" />\n      <!--[if gte mso 9]>\n      <xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>\u8868\u683C1</x:Name>\n      <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>\n      </x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook>\n      </xml>\n      <![endif]-->\n      </head>\n      <body>\n      " + tables + "\n      </body>\n    </html>\n  ";
    return template;
}
exports.office = office;
//# sourceMappingURL=office.js.map