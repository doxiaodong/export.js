"use strict";
var FileSaver = require("file-saver");
var office_1 = require("./office");
var type = 'doc';
var charset = "application/msword";
function exportDOC(filename, data) {
    var exportData = office_1.office(data, charset, type);
    FileSaver.saveAs(new Blob([exportData], {
        type: charset
    }), filename + "." + type);
}
exports.exportDOC = exportDOC;
//# sourceMappingURL=doc.js.map