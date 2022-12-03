import { getCharacterPriority } from "../../src/d3-RuckSack/characterTranslator";

describe('Character Translator', () => {
    test('Simple test that should always pass', ()=> {
        let value: number = 1;
        let input: string = 'a';
        expect(getCharacterPriority(input)).toEqual(value);
    })

    test('Simple test that should always pass', ()=> {
        let value: number = 26;
        let input: string = 'z';
        expect(getCharacterPriority(input)).toEqual(value);
    })

    test('Simple test that should always pass', ()=> {
        let value: number = 27;
        let input: string = 'A';
        expect(getCharacterPriority(input)).toEqual(value);
    })

    test('Simple test that should always pass', ()=> {
        let value: number = 52;
        let input: string = 'Z';
        expect(getCharacterPriority(input)).toEqual(value);
    })
})