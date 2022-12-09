import Grid from '../../src/d9-RopeBridge/grid';

describe('Grid', () => {
    test('Tail positions starts at 1', ()=> {
        let grid: Grid = new Grid();
        expect(grid.numUniqueTailPositions).toEqual(1);
    })

    test('Tail position 0,0 after 1 head movement', ()=> {
        let grid: Grid = new Grid();

        grid.performMovement('R', 1);

        expect(grid.XHead).toEqual(1);
        expect(grid.YHead).toEqual(0);
        expect(grid.XTail).toEqual(0);
        expect(grid.YTail).toEqual(0);
    })

    test('Tail position 1,0 after 2 head movement', ()=> {
        let grid: Grid = new Grid();

        grid.performMovement('R', 2);

        expect(grid.XHead).toEqual(2);
        expect(grid.YHead).toEqual(0);
        expect(grid.XTail).toEqual(1);
        expect(grid.YTail).toEqual(0);
    })

    test('Tail position diagonal still after multiple head movements', ()=> {
        let grid: Grid = new Grid();

        grid.performMovement('R', 2);
        grid.performMovement('U', 1);

        expect(grid.XHead).toEqual(2);
        expect(grid.YHead).toEqual(1);
        expect(grid.XTail).toEqual(1);
        expect(grid.YTail).toEqual(0);
    })

    test('Tail position correct after multiple head movements', ()=> {
        let grid: Grid = new Grid();

        grid.performMovement('R', 2);
        grid.performMovement('U', 3);

        expect(grid.XHead).toEqual(2);
        expect(grid.YHead).toEqual(3);
        expect(grid.XTail).toEqual(2);
        expect(grid.YTail).toEqual(2);
    })

    test('Tail no move on overlap', ()=> {
        let grid: Grid = new Grid();

        grid.performMovement('R', 1);
        grid.performMovement('L', 2);

        expect(grid.XHead).toEqual(-1);
        expect(grid.YHead).toEqual(0);
        expect(grid.XTail).toEqual(0);
        expect(grid.YTail).toEqual(0);
    })

    test('Tail positions after multiple head movements', ()=> {
        let grid: Grid = new Grid();

        grid.performMovement('R', 2);
        grid.performMovement('U', 1);

        expect(grid.numUniqueTailPositions).toEqual(2);
    })

    test('Tail positions after multiple head movements, more', ()=> {
        let grid: Grid = new Grid();

        grid.performMovement('R', 2);
        grid.performMovement('U', 3);

        expect(grid.numUniqueTailPositions).toEqual(4);
    })

    test('Tail no positions on overlap', ()=> {
        let grid: Grid = new Grid();

        grid.performMovement('R', 1);
        grid.performMovement('L', 2);

        expect(grid.numUniqueTailPositions).toEqual(1);
    })
})