import Position from "../d09-RopeBridge/position";
import Range from "./range";
import Sensor from "./sensor";

export default class SensorCollection {
    public sensors: Sensor[] = [];
    
    constructor (
    ) {

    }

    public addSensor(sensor: Sensor) {
        this.sensors.push(sensor);
    }

    public getNonBeaconCountInRow(row: number): number {
        const emptyX = this.sensors.reduce((xSet, sensor) => {
            sensor.scanRow(row).forEach(position => position.Y === row && xSet.add(position.X));
            return xSet;
          }, new Set<number>());
      
          return emptyX.size;
    }

    public findLostBeacon(min: number, max: number): Position {
        const xRange: Range = new Range(min, max);
        const yRange: Range = new Range(min, max);

        let result: Position;
        this.sensors.forEach(sensor => {
            sensor.getBoundaryIn(xRange, yRange).forEach(point => {
                if (!this.isInSensorRange(point)) {
                    result = point;
                    return;
                }
            })
        });

        return result!;
    }

    private isInSensorRange(point: Position): boolean {
        return this.sensors.some(sensor => this.getAbsoluteDistance(point, sensor.position) <= sensor.beaconDistance);
    }

    private getAbsoluteDistance(p1: Position, p2: Position): number {
        return (Math.abs(p1.X - p2.X) + Math.abs(p1.Y - p2.Y));
    }
}