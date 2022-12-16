import * as fs from 'fs'
import Position from '../d09-RopeBridge/position';
import Dimesions2D from '../d14-SandyCave/dimensions2D';
import { getGridDimensions2D } from './dimensionCalculations';
import Grid from './grid';
import SensorMemory from './sensorMemory';


// let signalHistoryText: string[] = (fs.readFileSync('./assets/d15/d15-sample-1.txt', 'utf-8')).split(/\r?\n/);
// let signalHistoryText: string[] = (fs.readFileSync('./assets/d15/d15-sample.txt', 'utf-8')).split(/\r?\n/);
let signalHistoryText: string[] = (fs.readFileSync('./assets/d15-input.txt', 'utf-8')).split(/\r?\n/);

const positionPairs: Position[][] = [];
signalHistoryText.forEach(line => {
    const lineItems: string[] = line.split(' ');

    const p1x: number = parseInt(lineItems[2].split('=')[1]);
    const p1y: number = parseInt(lineItems[3].split('=')[1]);
    const p2x: number = parseInt(lineItems[8].split('=')[1]);
    const p2y: number = parseInt(lineItems[9].split('=')[1]);

    positionPairs.push([new Position(p1x, p1y), new Position(p2x, p2y)]);
})

const gridDimensions: Dimesions2D = getGridDimensions2D(positionPairs);
gridDimensions.X1 -= 10000;
gridDimensions.X2 += 10000;
// const gridDimensions: Dimesions2D = new Dimesions2D(-20, 40, -2, 22);

console.log('Got dimensions.');

const grid: Grid = new Grid(gridDimensions, '.');

console.log('Made grid.');

const sensorMemory: SensorMemory = new SensorMemory(grid, positionPairs);
sensorMemory.scanAllPoints();

const blankScannedCount: number = grid.getCharCountInRow(10, '#');
const sensorCount: number = grid.getCharCountInRow(10, 'S');
console.log(`Number of non-beacon positions: Blanks: ${blankScannedCount}, Sensors: ${sensorCount}, Total: ${blankScannedCount + sensorCount}`);
