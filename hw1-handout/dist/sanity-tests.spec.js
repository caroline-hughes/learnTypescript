"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Venusian_1 = require("./Venusian");
const Ship_1 = require("./Ship");
const maude = new Venusian_1.default('Maude');
const harold = new Venusian_1.default('Harold');
const Waldo1 = new Venusian_1.default('Waldo');
const Waldo2 = new Venusian_1.default('Waldo');
const ship1 = new Ship_1.default([], []);
const ship2 = new Ship_1.default([maude, harold, Waldo1, Waldo2], []);
const ship3 = new Ship_1.default([maude, harold], []);
const ship4 = new Ship_1.default([harold, Waldo1], [ship1, ship2]);
const ship5 = new Ship_1.default([], [ship2, ship4, ship3]);
describe('sanity tests', () => {
    test('methods for Venusians are defined', () => {
        expect(harold.getName()).toBeDefined();
        expect(harold.getVsn()).toBeDefined();
    });
    test('methods for Ship are defined', () => {
        expect(ship1.getCrew()).toBeDefined();
        expect(ship1.getDaughters()).toBeDefined();
        expect(ship1.getSerialNumber()).toBeDefined();
        expect(ship5.totalWaldos()).toBeDefined();
        expect(ship5.removeWaldos).toBeDefined();
        expect(ship5.removeDeepWaldos).toBeDefined();
        expect(ship5.fleetHasDuplicates()).toBeDefined();
    });
});
//# sourceMappingURL=sanity-tests.spec.js.map