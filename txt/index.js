"use strict";
var FileSaver = require("file-saver");
var csv_1 = require("../csv/csv");
var type = 'txt';
var charset = "csv/txt;charset=" + document.characterSet;
function exportTXT(filename, data) {
    var exportData = csv_1.CSV(data);
    FileSaver.saveAs(new Blob([exportData], {
        type: charset
    }), filename + "." + type);
}
exports.exportTXT = exportTXT;
//# sourceMappingURL=index.js.map