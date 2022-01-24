"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Venusian {
    constructor(name) {
        this.name = name;
        this.vsn = Buffer.from((0, uuid_1.v4)()).readUInt32BE(0);
    }
    getName() {
        return this.name;
    }
    getVsn() {
        return this.vsn;
    }
    isWaldo() {
        return this.getName() === 'Waldo';
    }
}
exports.default = Venusian;
// const v = new Venusian('brad');
//# sourceMappingURL=Venusian.js.map