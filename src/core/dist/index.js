"use strict";
exports.__esModule = true;
exports.close = exports.start = void 0;
require("src/styles/index.scss");
var modal_1 = require("./modal");
var wrapper = null;
exports.start = function () {
    var modal = (wrapper = modal_1.create());
    document.body.appendChild(modal);
};
exports.close = function () {
    document.body.removeChild(wrapper);
};
