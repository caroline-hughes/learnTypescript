"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var Ship = /** @class */ (function () {
    function Ship(crew, daughters) {
        this.crew = crew;
        this.daughters = daughters;
        // https://gist.github.com/therightstuff/9f83967b9c23354a27ed691a6b591b0c
        this.usn = Buffer.from((0, uuid_1.v4)()).readUInt32BE(0);
    }
    Ship.prototype.getCrew = function () {
        return this.crew;
    };
    Ship.prototype.setCrew = function (newCrew) {
        this.crew = newCrew;
    };
    Ship.prototype.getDaughters = function () {
        return this.daughters;
    };
    Ship.prototype.getSerialNumber = function () {
        return this.usn;
    };
    // returns true iff the ship has one or more crew members named Waldo
    Ship.prototype.hasWaldo = function () {
        return this.crew.some(function (member) { return member.isWaldo(); });
    };
    Ship.prototype.waldosInCrew = function () {
        var _a;
        if (!this.crew.length) {
            return 0;
        }
        var count = 0;
        (_a = this.crew) === null || _a === void 0 ? void 0 : _a.forEach(function (member) {
            if (member.isWaldo()) {
                count += 1;
            }
        });
        return count;
    };
    Ship.prototype.waldosInDaughters = function () {
        if (!this.daughters.length) {
            return 0;
        }
        var count = 0;
        this.daughters.forEach(function (sh) {
            count += sh.totalWaldos();
        });
        return count;
    };
    // returns the number of Venusians named “Waldo” that are in the ship or its fleet
    Ship.prototype.totalWaldos = function () {
        return this.waldosInCrew() + this.waldosInDaughters();
    };
    // removes any Venusians named “Waldo” from the crew of the ship.
    Ship.prototype.removeWaldos = function () {
        var _a;
        var newCrew = [];
        (_a = this.crew) === null || _a === void 0 ? void 0 : _a.forEach(function (member) {
            if (!member.isWaldo()) {
                newCrew.push(member);
            }
        });
        this.setCrew(newCrew);
    };
    // removes any Venusians named Waldo from the crews of the given ship and its fleet.
    Ship.prototype.removeDeepWaldos = function () {
        var _a;
        this.removeWaldos();
        (_a = this.daughters) === null || _a === void 0 ? void 0 : _a.forEach(function (ship) {
            ship.removeDeepWaldos();
        });
    };
    // eslint-disable-next-line class-methods-use-this
    Ship.prototype.fleetHasDuplicates = function () {
        return false;
    };
    return Ship;
}());
exports["default"] = Ship;
// const sh = new Ship([], []);
// console.log('ship:', sh);
