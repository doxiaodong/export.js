"use strict";
var FileSaver = require("file-saver");
var office_1 = require("./office");
var type = 'xlsx';
var charset = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
function exportXLSX(filename, data) {
    var exportData = office_1.office(data, charset, type);
    FileSaver.saveAs(new Blob([exportData], {
        type: charset
    }), filename + "." + type);
}
exports.exportXLSX = exportXLSX;
//# sourceMappingURL=xlsx.js.map