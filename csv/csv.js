"use strict";
var CSVConfig = {
    delimiter: ',',
    newLine: '\r\n'
};
function CSV(data) {
    var ret = '\uFEFF'; // fix unicode show error
    data.forEach(function (d) {
        // th
        if (d.th) {
            var newTh = d.th.map(function (value) { return fixCSVField(value); });
            var thLine = newTh.join(CSVConfig.delimiter) + CSVConfig.newLine;
            ret += thLine;
        }
        // td
        var tds = d.td.map(function (td) {
            var newTd = td.map(function (value) { return fixCSVField(value); });
            return newTd.join(CSVConfig.delimiter);
        });
        var tdLines = tds.join(CSVConfig.newLine) + CSVConfig.newLine;
        ret += tdLines;
    });
    return ret;
}
exports.CSV = CSV;
function fixCSVField(value) {
    var addQuotes = (value.indexOf(',') !== -1) || (value.indexOf('\r') !== -1) || (value.indexOf('\n') !== -1);
    var replaceDoubleQuotes = (value.indexOf('"') !== -1);
    if (replaceDoubleQuotes) {
        value = value.replace(/"/g, '""');
    }
    if (addQuotes || replaceDoubleQuotes) {
        value = "\"" + value + "\"";
    }
    return '\t' + value;
}
//# sourceMappingURL=csv.js.map