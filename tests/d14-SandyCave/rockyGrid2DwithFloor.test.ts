import * as fs from 'fs'
import Position from '../../src/d09-RopeBridge/position';
import RockyGrid2D from '../../src/d14-SandyCave/rockyGrid2D';
import RockyGrid2DWithFloor from '../../src/d14-SandyCave/rockyGrid2DwithFloor';

describe('Rocky Grid 2D with Floor', () => {
    let rockPositionSampleText: string[];
    let rockPositionText: string[];

    beforeEach(() => {
        rockPositionSampleText = (fs.readFileSync('./assets/d14/d14-sample.txt', 'utf-8')).split(/\r?\n/);
        rockPositionText = (fs.readFileSync('./assets/d14-input.txt', 'utf-8')).split(/\r?\n/);
    })

    function loadRockPositions(positionText: string[]): Position[][] {
        let rockPositions: Position[][] = [];
        positionText.forEach(line => {
            let elements: string[] = line.split('->');
            let positionGroup: Position[] = [];

            elements.forEach(element => {
                let coords = element.split(',');
                positionGroup.push(new Position(parseInt(coords[0]), parseInt(coords[1])));
            })

            rockPositions.push(positionGroup);
        })

        return rockPositions;
    }

    test('Stack until blocking entrance sand grain count sample', ()=> {
        let rockPositions: Position[][] = loadRockPositions(rockPositionSampleText);

        const grid: RockyGrid2DWithFloor = new RockyGrid2DWithFloor(rockPositions);
        grid.dropSandUntilItClogsEntryPoint(500);
        
        expect(grid.getSandCount()).toEqual(93);
    })

    test('Stack until blocking entrance sand grain count real', ()=> {
        let rockPositions: Position[][] = loadRockPositions(rockPositionText);

        const grid: RockyGrid2DWithFloor = new RockyGrid2DWithFloor(rockPositions);
        grid.dropSandUntilItClogsEntryPoint(500);
        
        expect(grid.getSandCount()).toEqual(25193);
    })
})