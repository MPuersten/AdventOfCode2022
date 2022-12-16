import Position, { Translation } from "../d09-RopeBridge/position";
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
        this.beaconDistance = this.getAbsoluteDistance(position, beacon.position);
        this.xRange = new Range(position.X - this.beaconDistance, position.X + this.beaconDistance);
        this.yRange = new Range(position.Y - this.beaconDistance, position.Y + this.beaconDistance);
    }

    private getAbsoluteDistance(p1: Position, p2: Position): number {
        return (Math.abs(p1.X - p2.X) + Math.abs(p1.Y - p2.Y));
    }

    scanRow(row: number): Position[] {
        if (!this.isValueWithinRange(row, this.yRange)) return [];

        const positions: Position[] = [];
        for ( let x = this.xRange.min; x < this.xRange.max; x++) {
            const neighbor = new Position(x, row);

            const overlap: boolean = (neighbor.overlapsWith(this.beacon.position));
            const inField: boolean = (
                this.getAbsoluteDistance(this.position, neighbor) <= this.beaconDistance
            );

            if (!overlap && inField) positions.push(neighbor);
        }

        return positions;
    }

    getBoundaryIn(xRange: Range, yRange: Range): Position[] {
        const x = this.position.X;
        const y = this.position.Y;

        const top = new Position(x, this.yRange.min - 1);
        const left = new Position(this.xRange.min - 1, y);
        const bottom = new Position(x, this.yRange.max + 1);
        const right = new Position(this.xRange.max + 1, y);
        const boundaryPaths: [Position, Position, Translation][] = [
          [top, left, [-1, 1]],
          [left, bottom, [1, 1]],
          [bottom, right, [1, -1]],
          [right, top, [-1, -1]],
        ];
    
        let boundary: Position[] = [];
        for (const [from, to, translation] of boundaryPaths) {
            let next = from;
            while (!next.overlapsWith(to)) {
                if (this.isPositionWithinRanges(next, xRange, yRange)) {
                    boundary.push(next);
                }
                next = next.copy().translate(translation);
            }
        }
        return boundary;
    }

    isPositionWithinRanges(pos: Position, rangeX: Range, rangeY: Range): boolean {
        return (this.isValueWithinRange(pos.X, rangeX) && this.isValueWithinRange(pos.Y, rangeY));
    }

    isValueWithinRange(value: number, range: Range): boolean {
        return (value >= range.min && value <= range.max);
    }
}