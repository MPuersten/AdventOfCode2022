import Position from "../../src/d09-RopeBridge/position";

describe('Position', () => {
    test('Two positions with different values do not overlap', ()=> {
        const pos1: Position = new Position(5, 10);
        const pos2: Position = new Position(3, 8);
        expect(pos1.overlapsWith(pos2)).toEqual(false);
    })

    test('Two positions with different values do not overlap in line vertical', ()=> {
        const pos1: Position = new Position(5, 10);
        const pos2: Position = new Position(5, 8);
        expect(pos1.overlapsWith(pos2)).toEqual(false);
    })

    test('Two positions with different values do not overlap in line horizontal', ()=> {
        const pos1: Position = new Position(5, 10);
        const pos2: Position = new Position(3, 10);
        expect(pos1.overlapsWith(pos2)).toEqual(false);
    })

    test('Two positions with the same values overlap', ()=> {
        const pos1: Position = new Position(5, 10);
        const pos2: Position = new Position(5, 10);
        expect(pos1.overlapsWith(pos2)).toEqual(true);
    })
})