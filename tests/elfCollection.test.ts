import * as fs from 'fs'
import Elf from '../src/elf';
import ElfCollection from '../src/elfCollection';
import SnackContainer from '../src/interfaces/SnackContainer';
import SnackLedgerInterpreter from '../src/snackLedgerInterpreter'

describe('Elf collection tests', () => {
    let _elfCollection: ElfCollection;

    beforeEach(() => {
        let snackLedger: string = fs.readFileSync('../assets/d1-input.txt', 'utf-8');

        let interpreter: SnackLedgerInterpreter = new SnackLedgerInterpreter();
        let individualElfSnackLists: number[][] = interpreter.getCalorieLists(snackLedger);

        // Make Elves
        let elves: SnackContainer[] = [];
        for (let i = 0; i < individualElfSnackLists.length; i++) {
            elves.push(new Elf(individualElfSnackLists[i]));
        }

        // Assemble collection
        _elfCollection = new ElfCollection(elves as Elf[]);
    })
    
    test('Elf collection can report the highest single calorie count', ()=> {
        let numElves = 1;
        let expectedCalorieCount: number = 64929;
        expect(_elfCollection.getHighestCalorieTotal(numElves)).toEqual(expectedCalorieCount);
    })

    test('Elf collection can report the highest 3 elf max calorie count', ()=> {
        let numElves: number = 3;
        let expectedCalorieCount: number = 0;
        expect(_elfCollection.getHighestCalorieTotal(numElves)).toEqual(expectedCalorieCount);
    })

    test('Elf collection can report the number of elves', ()=> {
        let numExpectedElves: number = 254;
        expect(_elfCollection.length).toEqual(numExpectedElves);
    })
})