import { firstRangeContainsSecond, anyOverlap } from "../../src/d04-CleanupSections/sectionAnalyzer";

describe('Section Analyzer', () => {
    test('First contains second is true, over extend', ()=> {
        let expectedResult: boolean = true;
        let firstRange: number[] = [1, 100];
        let secondRange: number[] = [2, 99];
        
        expect(firstRangeContainsSecond(firstRange, secondRange)).toEqual(expectedResult);
    })

    test('First contains second is true, exact', ()=> {
        let expectedResult: boolean = true;
        let firstRange: number[] = [1, 100];
        let secondRange: number[] = [1, 100];
        
        expect(firstRangeContainsSecond(firstRange, secondRange)).toEqual(expectedResult);
    })

    test('First contains second is false, one sided high', ()=> {
        let expectedResult: boolean = false;
        let firstRange: number[] = [1, 98];
        let secondRange: number[] = [2, 99];
        
        expect(firstRangeContainsSecond(firstRange, secondRange)).toEqual(expectedResult);
    })

    test('First contains second is false, one sided low', ()=> {
        let expectedResult: boolean = false;
        let firstRange: number[] = [3, 100];
        let secondRange: number[] = [2, 99];
        
        expect(firstRangeContainsSecond(firstRange, secondRange)).toEqual(expectedResult);
    })

    test('First contains second is false, double sided', ()=> {
        let expectedResult: boolean = false;
        let firstRange: number[] = [3, 98];
        let secondRange: number[] = [2, 99];
        
        expect(firstRangeContainsSecond(firstRange, secondRange)).toEqual(expectedResult);
    })

    test('Any overlap is true', ()=> {
        let expectedResult: boolean = true;
        let firstRange: number[] = [1, 2];
        let secondRange: number[] = [2, 3];
        
        expect(anyOverlap(firstRange, secondRange)).toEqual(expectedResult);
    })

    test('Any overlap is false', ()=> {
        let expectedResult: boolean = false;
        let firstRange: number[] = [1, 2];
        let secondRange: number[] = [3, 4];
        
        expect(anyOverlap(firstRange, secondRange)).toEqual(expectedResult);
    })
})