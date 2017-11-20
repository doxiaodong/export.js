"use strict";
var FileSaver = require("file-saver");
var office_1 = require("./office");
var type = 'docx';
var charset = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
function exportDOCX(filename, data) {
    var exportData = office_1.office(data, charset, type);
    FileSaver.saveAs(new Blob([exportData], {
        type: charset
    }), filename + "." + type);
}
exports.exportDOCX = exportDOCX;
//# sourceMappingURL=docx.js.map