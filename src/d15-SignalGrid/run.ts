import * as fs from 'fs'
import Position from '../d09-RopeBridge/position';
import Dimesions2D from '../d14-SandyCave/dimensions2D';
import { getGridDimensions2D } from './dimensionCalculations';
import Grid from './grid';
import SensorMemory from './sensorMemory';

let signalHistoryText: string[] = (fs.readFileSync('./assets/d15/d15-sample.txt', 'utf-8')).split(/\r?\n/);
// let signalHistoryText: string[] = (fs.readFileSync('./assets/d15-input.txt', 'utf-8')).split(/\r?\n/);

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
const grid: Grid = new Grid(gridDimensions, '.');

const sensorMemory: SensorMemory = new SensorMemory(grid, positionPairs);
sensorMemory.scanAllPoints();

grid.printGrid();