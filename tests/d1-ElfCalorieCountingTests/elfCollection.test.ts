import * as fs from 'fs'
import Elf from '../../src/d1-ElfCalorieCounting/elf';
import ElfCollection from '../../src/d1-ElfCalorieCounting/elfCollection';
import SnackContainer from '../../src/d1-ElfCalorieCounting/interfaces/snackContainer';
import SnackLedgerInterpreter from '../../src/d1-ElfCalorieCounting/snackLedgerInterpreter'

describe('Elf collection tests', () => {
    let _elfCollection: ElfCollection;

    beforeEach(() => {
        let snackLedger: string = fs.readFileSync('./assets/d1-input.txt', 'utf-8');

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
        let expectedCalorieCount: number = 193697;
        expect(_elfCollection.getHighestCalorieTotal(numElves)).toEqual(expectedCalorieCount);
    })

    test('Elf collection can report the number of elves', ()=> {
        let numExpectedElves: number = 254;
        expect(_elfCollection.length).toEqual(numExpectedElves);
    })
})