import Position from "../d09-RopeBridge/position";
import Range from "./range";

export default class Sensor {
    beaconDistance: number;
    xRange: Range;
    yRange: Range;
    
    constructor(
        public position: Position,
        public beacon: Beacon
    ) {
        this.beaconDistance = this.getManhattanDistance(position, beacon.position);
        this.xRange = new Range(position.X - this.beaconDistance, position.X + this.beaconDistance);
        this.yRange = new Range(position.X - this.beaconDistance, position.X + this.beaconDistance);
    }

    private getManhattanDistance(p1: Position, p2: Position): number {
        return (Math.abs(p1.X - p2.X) + Math.abs(p1.Y - p2.Y));
    }
}