import BisectingRucksack from "../../src/d3-Rucksack/bisectingRucksack"

describe('Rucksack', () => {
    test('Find repeated character after bisection', ()=> {
        let input: string = 'abcade';
        let repeatedCharacter = 'a';

        let sack: BisectingRucksack = new BisectingRucksack(input);

        expect(sack.repeatedCharacter).toBe(repeatedCharacter);
    })

    test('Find repeated character after bisection', ()=> {
        let input: string = 'vJrwpWtwJgWrhcsFMMfFFhFp';
        let repeatedCharacter = 'p';

        let sack: BisectingRucksack = new BisectingRucksack(input);

        expect(sack.repeatedCharacter).toBe(repeatedCharacter);
    })

    test('Find repeated character after bisection', ()=> {
        let input: string = 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL';
        let repeatedCharacter = 'L';

        let sack: BisectingRucksack = new BisectingRucksack(input);

        expect(sack.repeatedCharacter).toBe(repeatedCharacter);
    })

    test('Find repeated character after bisection', ()=> {
        let input: string = 'PmmdzqPrVvPwwTWBwg';
        let repeatedCharacter = 'P';

        let sack: BisectingRucksack = new BisectingRucksack(input);

        expect(sack.repeatedCharacter).toBe(repeatedCharacter);
    })
})