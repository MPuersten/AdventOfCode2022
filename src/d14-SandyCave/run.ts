import * as fs from 'fs'
import Position from '../d09-RopeBridge/position';
import RockyGrid2D from './rockyGrid2D';

let signalPairText: string[] = (fs.readFileSync('./assets/d14/d14-sample.txt', 'utf-8')).split(/\r?\n/);
// let signalPairText: string[] = (fs.readFileSync('./assets/d14-input.txt', 'utf-8')).split(/\r?\n/);

let rockPositions: Position[][] = [];
signalPairText.forEach(line => {
    let elements: string[] = line.split('->');
    let positionGroup: Position[] = [];

    elements.forEach(element => {
        let coords = element.split(',');
        positionGroup.push(new Position(parseInt(coords[0]), parseInt(coords[1])));
    })

    rockPositions.push(positionGroup);
})

const grid: RockyGrid2D = new RockyGrid2D(rockPositions);
grid.printGrid();