"use strict";
var FileSaver = require("file-saver");
var xml_1 = require("./xml");
var type = 'xml';
var charset = "application/xml";
function exportXML(filename, data) {
    var exportData = xml_1.xml(data);
    FileSaver.saveAs(new Blob([exportData], {
        type: charset
    }), filename + "." + type);
}
exports.exportXML = exportXML;
//# sourceMappingURL=index.js.map