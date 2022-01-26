"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Ship {
    constructor(crew, daughters) {
        this.crew = crew;
        this.daughters = daughters;
        // https://gist.github.com/therightstuff/9f83967b9c23354a27ed691a6b591b0c
        this.usn = Buffer.from((0, uuid_1.v4)()).readUInt32BE(0);
    }
    getCrew() {
        return this.crew;
    }
    setCrew(newCrew) {
        this.crew = newCrew;
    }
    getDaughters() {
        return this.daughters;
    }
    getSerialNumber() {
        return this.usn;
    }
    // returns true iff the ship has one or more crew members named Waldo
    hasWaldo() {
        return this.crew.some(member => member.isWaldo());
    }
    waldosInCrew() {
        var _a;
        if (!this.crew.length) {
            return 0;
        }
        let count = 0;
        (_a = this.crew) === null || _a === void 0 ? void 0 : _a.forEach(member => {
            if (member.isWaldo()) {
                count += 1;
            }
        });
        return count;
    }
    waldosInDaughters() {
        if (!this.daughters.length) {
            return 0;
        }
        let count = 0;
        this.daughters.forEach(sh => {
            count += sh.totalWaldos();
        });
        return count;
    }
    // returns the number of Venusians named “Waldo” that are in the ship or its fleet
    totalWaldos() {
        return this.waldosInCrew() + this.waldosInDaughters();
    }
    // removes any Venusians named “Waldo” from the crew of the ship.
    removeWaldos() {
        var _a;
        const newCrew = [];
        (_a = this.crew) === null || _a === void 0 ? void 0 : _a.forEach(member => {
            if (!member.isWaldo()) {
                newCrew.push(member);
            }
        });
        this.setCrew(newCrew);
    }
    // removes any Venusians named Waldo from the crews of the given ship and its fleet.
    removeDeepWaldos() {
        var _a;
        this.removeWaldos();
        (_a = this.daughters) === null || _a === void 0 ? void 0 : _a.forEach(ship => {
            ship.removeDeepWaldos();
        });
    }
    // eslint-disable-next-line class-methods-use-this
    fleetHasDuplicates() {
        return false;
    }
}
exports.default = Ship;
// const sh = new Ship([], []);
// console.log('ship:', sh);
//# sourceMappingURL=Ship.js.map