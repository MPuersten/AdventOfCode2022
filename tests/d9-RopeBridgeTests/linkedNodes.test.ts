import * as fs from 'fs'
import LinkedNodes from "../../src/d9-RopeBridge/linkedNodes";

describe('Linked Grid', () => {
    test('Tail positions starts at 1', ()=> {
        let grid: LinkedNodes = new LinkedNodes(2);
        expect(grid.numUniqueTailPositions).toEqual(1);
    })

    test('Tail position 0,0 after 1 head movement', ()=> {
        let grid: LinkedNodes = new LinkedNodes(2);

        grid.performMovement('R', 1);

        expect(grid.Positions[0].X).toEqual(1);
        expect(grid.Positions[0].Y).toEqual(0);
        expect(grid.Positions[1].X).toEqual(0);
        expect(grid.Positions[1].Y).toEqual(0);
    })

    test('Tail position 1,0 after 2 head movement', ()=> {
        let grid: LinkedNodes = new LinkedNodes(2);

        grid.performMovement('R', 2);

        expect(grid.Positions[0].X).toEqual(2);
        expect(grid.Positions[0].Y).toEqual(0);
        expect(grid.Positions[1].X).toEqual(1);
        expect(grid.Positions[1].Y).toEqual(0);
    })

    test('Tail position diagonal still after multiple head movements', ()=> {
        let grid: LinkedNodes = new LinkedNodes(2);

        grid.performMovement('R', 2);
        grid.performMovement('U', 1);

        expect(grid.Positions[0].X).toEqual(2);
        expect(grid.Positions[0].Y).toEqual(1);
        expect(grid.Positions[1].X).toEqual(1);
        expect(grid.Positions[1].Y).toEqual(0);
    })

    test('Tail position correct after multiple head movements', ()=> {
        let grid: LinkedNodes = new LinkedNodes(2);

        grid.performMovement('R', 2);
        grid.performMovement('U', 3);

        expect(grid.Positions[0].X).toEqual(2);
        expect(grid.Positions[0].Y).toEqual(3);
        expect(grid.Positions[1].X).toEqual(2);
        expect(grid.Positions[1].Y).toEqual(2);
    })

    test('Tail no move on overlap', ()=> {
        let grid: LinkedNodes = new LinkedNodes(2);

        grid.performMovement('R', 1);
        grid.performMovement('L', 2);

        expect(grid.Positions[0].X).toEqual(-1);
        expect(grid.Positions[0].Y).toEqual(0);
        expect(grid.Positions[1].X).toEqual(0);
        expect(grid.Positions[1].Y).toEqual(0);
    })

    test('Tail positions after multiple head movements', ()=> {
        let grid: LinkedNodes = new LinkedNodes(2);

        grid.performMovement('R', 2);
        grid.performMovement('U', 1);

        expect(grid.numUniqueTailPositions).toEqual(2);
    })

    test('Tail positions after multiple head movements, more', ()=> {
        let grid: LinkedNodes = new LinkedNodes(2);

        grid.performMovement('R', 2);
        grid.performMovement('U', 3);

        expect(grid.numUniqueTailPositions).toEqual(4);
    })

    test('Tail no positions on overlap', ()=> {
        let grid: LinkedNodes = new LinkedNodes(2);

        grid.performMovement('R', 1);
        grid.performMovement('L', 2);

        expect(grid.numUniqueTailPositions).toEqual(1);
    })
    
    test('10 node grid has correct long tail position count', ()=> {
        let expectedNumTailPositions: number = 2578;
        let instructionText: string[] = (fs.readFileSync('./assets/d9-input.txt', 'utf-8')).split(/\r?\n/);
        let instructions: string[][] = instructionText.map(instruction => instruction.split(' '));
        
        let grid: LinkedNodes = new LinkedNodes(10);

        for (let i = 0; i < instructions.length; i++) {
            grid.performMovement(instructions[i][0], parseInt(instructions[i][1]));
        }

        expect(grid.numUniqueTailPositions).toEqual(expectedNumTailPositions);
    })
})