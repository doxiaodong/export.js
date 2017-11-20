"use strict";
var FileSaver = require("file-saver");
var csv_1 = require("./csv");
var type = 'csv';
var charset = "csv/txt;charset=" + document.characterSet;
function exportCSV(filename, data) {
    var exportData = csv_1.CSV(data);
    FileSaver.saveAs(new Blob([exportData], {
        type: charset
    }), filename + "." + type);
}
exports.exportCSV = exportCSV;
//# sourceMappingURL=index.js.map