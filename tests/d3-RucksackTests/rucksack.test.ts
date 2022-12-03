import BisectingRucksack from "../../src/d3-RuckSack/rucksack"

describe('Rucksack', () => {
    test('Find repeated character after bisection', ()=> {
        let input: string = 'abcade';
        let repeatedCharacter = 'a';

        let sack: BisectingRucksack = new BisectingRucksack(input);

        expect(sack.repeatedCharacter).toBe(repeatedCharacter);
    })
})