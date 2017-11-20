"use strict";
var FileSaver = require("file-saver");
var office_1 = require("./office");
var type = 'xls';
var charset = "application/vnd.ms-excel;charset=UTF-8";
function exportXLS(filename, data) {
    var exportData = office_1.office(data, charset, type);
    FileSaver.saveAs(new Blob([exportData], {
        type: charset
    }), filename + "." + type);
}
exports.exportXLS = exportXLS;
//# sourceMappingURL=xls.js.map