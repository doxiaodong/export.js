"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var csv_1 = require("./csv");
var txt_1 = require("./txt");
var office_1 = require("./office");
var xml_1 = require("./xml");
__export(require("./csv"));
__export(require("./txt"));
__export(require("./office"));
__export(require("./xml"));
exports.exp = {
    csv: csv_1.exportCSV,
    txt: txt_1.exportTXT,
    doc: office_1.exportDOC,
    docx: office_1.exportDOCX,
    xls: office_1.exportXLS,
    xlsx: office_1.exportXLSX,
    xml: xml_1.exportXML
};
global['exp'] = exports.exp;
if (typeof global['define'] === 'function' && global['define'].amd) {
    global['define']('exp', [], function () { return exports.exp; });
}
//# sourceMappingURL=index.js.map