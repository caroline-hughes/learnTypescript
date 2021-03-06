"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var Venusian = /** @class */ (function () {
    function Venusian(name) {
        this.name = name;
        // idea from https://gist.github.com/therightstuff/9f83967b9c23354a27ed691a6b591b0c
        this.vsn = Buffer.from((0, uuid_1.v4)()).readUInt32BE(0);
    }
    Venusian.prototype.getName = function () {
        return this.name;
    };
    Venusian.prototype.getVsn = function () {
        return this.vsn;
    };
    Venusian.prototype.isWaldo = function () {
        return this.getName() === 'Waldo';
    };
    return Venusian;
}());
exports["default"] = Venusian;
