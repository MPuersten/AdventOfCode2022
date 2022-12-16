import Position from "../d09-RopeBridge/position";
import Beacon from "./beacon";
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
        this.yRange = new Range(position.Y - this.beaconDistance, position.Y + this.beaconDistance);
    }

    private getManhattanDistance(p1: Position, p2: Position): number {
        return (Math.abs(p1.X - p2.X) + Math.abs(p1.Y - p2.Y));
    }

    scanRow(row: number): Position[] {
        if (!this.isValueWithinRange(row, this.yRange)) return [];

        const positions: Position[] = [];
        for ( let x = this.xRange.min; x < this.xRange.max; x++) {
            const neighbor = new Position(x, row);

            const overlap: boolean = (neighbor.overlapsWith(this.beacon.position));
            const inField: boolean = (
                this.getManhattanDistance(this.position, neighbor) <= this.beaconDistance
            );

            if (!overlap && inField) positions.push(neighbor);
        }

        return positions;
    }

    isValueWithinRange(value: number, range: Range): boolean {
        return (value >= range.min && value <= range.max);
    }
}