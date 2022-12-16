import * as fs from 'fs'
import Position from '../d09-RopeBridge/position';
import Beacon from './beacon';
import Sensor from './sensor';
import SensorCollection from './sensorCollection';

// let signalHistoryText: string[] = (fs.readFileSync('./assets/d15/d15-sample-1.txt', 'utf-8')).split(/\r?\n/);
// let signalHistoryText: string[] = (fs.readFileSync('./assets/d15/d15-sample.txt', 'utf-8')).split(/\r?\n/);
let signalHistoryText: string[] = (fs.readFileSync('./assets/d15-input.txt', 'utf-8')).split(/\r?\n/);

const sensors: SensorCollection = new SensorCollection();
signalHistoryText.forEach(line => {
    const lineItems: string[] = line.split(' ');

    const p1x: number = parseInt(lineItems[2].split('=')[1]);
    const p1y: number = parseInt(lineItems[3].split('=')[1]);
    const sensorPos: Position = new Position(p1x, p1y);

    const p2x: number = parseInt(lineItems[8].split('=')[1]);
    const p2y: number = parseInt(lineItems[9].split('=')[1]);
    const beaconPos: Position = new Position(p2x, p2y);
    const beacon: Beacon = new Beacon(beaconPos);

    const sensor: Sensor = new Sensor(sensorPos, beacon);

    sensors.addSensor(sensor);
})

// console.log(JSON.stringify(sensors.sensors));
let emptyPositions = sensors.getNonBeaconCountInRow(2000000);
console.log(`Num non beacon positions: ${emptyPositions}`);