"use strict";
var rowID = 0;
function xml(data) {
    var xml = '<?xml version="1.0" encoding="utf-8"?>';
    data.forEach(function (d) {
        xml += '<table>';
        if (d.th) {
            var joinTh = d.th.join('</column><column>');
            xml += "\n        <row id=\"" + rowID++ + "\">\n          <column>\n          " + joinTh + "\n          </column>\n        </row>\n      ";
        }
        var tds = d.td.map(function (td) {
            return "<column\">" + td.join('</column><column>') + "</column>";
        });
        xml += "\n       <row id=\"" + rowID++ + "\">\n        " + tds.join('</row><row id="' + rowID++ + '">') + "    \n      </row>\n    ";
        xml += '</table>';
    });
    return xml;
}
exports.xml = xml;
//# sourceMappingURL=xml.js.map