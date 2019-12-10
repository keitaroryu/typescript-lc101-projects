import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name:string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sum:number = 0;

        for(let i of items) {
            sum += i.massKg;
        }

        return sum;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        let currentMassPlusPayloadItemKg = this.currentMassKg() + item.massKg;
        return currentMassPlusPayloadItemKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo){
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        } 
    }
}
