import { areSurroundingElementsEvenOrLarger } from "../../src/d8-TreeHouse/2dArrayUtilities";

describe('2D Array Utilities', () => {
    let grid: number[][] = [
        [3, 0, 3, 7, 3],
        [2, 5, 5, 1, 2],
        [6, 5, 3, 3, 2],
        [3, 3, 5, 4, 9],
        [3, 5, 3, 9, 0]
    ];
    
    beforeEach(() => {
        
    })
    
    test('Surrounding elements larger, outside edge row always false', ()=> {
        let expectedLargerSurrounding: boolean = false;

        let largerSurrounding: boolean = areSurroundingElementsEvenOrLarger(grid, 0, 1);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })
    
    test('Surrounding elements larger, outside edge col always false', ()=> {
        let expectedLargerSurrounding: boolean = false;

        let largerSurrounding: boolean = areSurroundingElementsEvenOrLarger(grid, 0, 1);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })

    test('Surrounding elements larger, inside uncovered', ()=> {
        let expectedLargerSurrounding: boolean = false;

        let largerSurrounding: boolean = areSurroundingElementsEvenOrLarger(grid, 2, 1);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })

    test('Surrounding elements larger, inside covered 1', ()=> {
        let expectedLargerSurrounding: boolean = true;

        let largerSurrounding: boolean = areSurroundingElementsEvenOrLarger(grid, 2, 2);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })

    test('Surrounding elements larger, inside covered 2', ()=> {
        let expectedLargerSurrounding: boolean = true;

        let largerSurrounding: boolean = areSurroundingElementsEvenOrLarger(grid, 3, 3);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })
})