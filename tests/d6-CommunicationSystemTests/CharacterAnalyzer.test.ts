import { FindNumCharsBeforeStringIsUnique } from "../../src/d6-CommunicationSystem/CharacterAnalyzer";

describe('Character Analyzer', () => {
    test('One character window should return 1', ()=> {
        let windowSize: number = 1;
        let expectedNumChars: number = 1;
        let input: string = 'a';

        let numChars = FindNumCharsBeforeStringIsUnique(input, windowSize);
        
        expect(numChars).toEqual(expectedNumChars);
    })

    test('Four character window', ()=> {
        let windowSize: number = 4;
        let input: string = 'abcabcabcabcabcabcde';
        let expectedNumChars: number = input.length - 1;
        
        let numChars = FindNumCharsBeforeStringIsUnique(input, windowSize);
        
        expect(numChars).toEqual(expectedNumChars);
    })

    test('Four character window with less uniqueness', ()=> {
        let windowSize: number = 4;
        let input: string = 'abacaabbxyz';
        let expectedNumChars: number = input.length;
        
        let numChars = FindNumCharsBeforeStringIsUnique(input, windowSize);
        
        expect(numChars).toEqual(expectedNumChars);
    })
})