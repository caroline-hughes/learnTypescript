"use strict";
exports.__esModule = true;
var Ship = /** @class */ (function () {
    // constructor(crew: Venusian[], daughters: Ship[]) {
    //   this.crew = crew;
    //   this.daughters = daughters;
    //   // idea from https://gist.github.com/therightstuff/9f83967b9c23354a27ed691a6b591b0c
    //   this.usn = Buffer.from(uuidv4()).readUInt32BE(0);
    // }
    function Ship(crew, daughters, usn) {
        this.crew = crew;
        this.daughters = daughters;
        this.usn = usn;
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
    // go through serial numbers recursively and add them to an array
    Ship.prototype.addNumbersToArr = function (arr) {
        if (!this.daughters.length) {
            return arr;
        }
        this.daughters.forEach(function (d) {
            arr.push(d.getSerialNumber());
            d.addNumbersToArr(arr);
        });
        // console.log('do we get here?')
        return arr;
    };
    // Given a ship, determines whether there are any duplicates among the ship and its fleet.
    Ship.prototype.fleetHasDuplicates = function () {
        var arr = this.addNumbersToArr([this.usn]);
        console.log('arr', arr);
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j])
                    return true;
            }
        }
        return false;
    };
    return Ship;
}());
exports["default"] = Ship;
var ship4 = new Ship([], [], 3);
var ship3 = new Ship([], [], 3);
var ship2 = new Ship([], [ship3, ship4], 0);
var ship1 = new Ship([], [ship2], 1);
console.log(ship1.fleetHasDuplicates());
// console.log('fleetHasDuplicates ?! ', ship1.fleetHasDuplicates())
// go through serial numbers recursively and add them to an array
// add the array to a set
