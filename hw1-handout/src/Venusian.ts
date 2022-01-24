import { v4 as uuidv4 } from 'uuid';

export default class Venusian {
  name: string;

  vsn: number;

  constructor(name: string) {
    this.name = name;
    this.vsn = Buffer.from(uuidv4()).readUInt32BE(0);
  }

  getName(): string {
    return this.name;
  }

  getVsn(): number {
    return this.vsn;
  }

  isWaldo(): boolean {
    return this.getName() === 'Waldo';
  }
} 

// const v = new Venusian('brad');