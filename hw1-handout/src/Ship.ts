import { v4 as uuidv4 } from 'uuid';
import Venusian from './Venusian';

export default class Ship {
  crew: Venusian[];

  daughters: Ship[];

  usn: number;

  constructor(crew: Venusian[], daughters: Ship[]) {
    this.crew = crew;
    this.daughters = daughters;
    // idea from https://gist.github.com/therightstuff/9f83967b9c23354a27ed691a6b591b0c
    this.usn = Buffer.from(uuidv4()).readUInt32BE(0);
  }

  getCrew(): Venusian[] {
    return this.crew;
  }

  setCrew(newCrew: Venusian[]): void {
    this.crew = newCrew;
  }

  getDaughters(): Ship[] {
    return this.daughters;
  }

  getSerialNumber(): number {
    return this.usn;
  }

  // returns true iff the ship has one or more crew members named Waldo
  hasWaldo(): boolean {
    return this.crew.some(member => member.isWaldo());
  }

  waldosInCrew(): number {
    if (!this.crew.length) {
      return 0;
    }
    let count = 0;
    this.crew?.forEach(member => {
      if (member.isWaldo()) {
        count += 1;
      }
    });
    return count;
  }

  waldosInDaughters(): number {
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
  totalWaldos(): number {
    return this.waldosInCrew() + this.waldosInDaughters();
  }

  // removes any Venusians named “Waldo” from the crew of the ship.
  removeWaldos(): void {
    const newCrew: Venusian[] = [];
    this.crew?.forEach(member => {
      if (!member.isWaldo()) {
        newCrew.push(member);
      }
    });
    this.setCrew(newCrew);
  }

  // removes any Venusians named Waldo from the crews of the given ship and its fleet.
  removeDeepWaldos(): void {
    this.removeWaldos();
    this.daughters?.forEach(ship => {
      ship.removeDeepWaldos();
    });
  }

  // Go through serial numbers recursively and add them to an array
  addNumbersToArr(arr: number[]): number[] {
    if (!this.daughters.length) {
      return arr;
    }
    this.daughters.forEach(d => {
      arr.push(d.getSerialNumber());
      d.addNumbersToArr(arr);
    });
    return arr;
  }

  // Given a ship, determines whether there are any duplicates among the ship and its fleet.
  fleetHasDuplicates(): boolean {
    // Get array with all of this fleet's serial nums
    const arr: number[] = this.addNumbersToArr([this.usn]);

    // Iterate through array to check for duplicates
    for (let i = 0; i < arr.length; i += 1) {
      for (let j = i + 1; j < arr.length; j += 1)  {
        if (arr[i] === arr[j]) return true;
      }
    }
    return false;
  }
}

