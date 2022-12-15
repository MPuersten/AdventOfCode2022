import Position from "../d09-RopeBridge/position";
import Grid from "./grid";

export default class SensorMemory {
    constructor(
        private grid: Grid,
        private positionPairs: Position[][]
    ) { }

    scanAllPoints(): void {
        this.positionPairs.forEach(pair => {
            this.scanPoint(pair[0], pair[1]);
        })
    }

    scanPoint(sensorPosition: Position, beaconPosition: Position) {
        let above: Position = new Position(sensorPosition.X, sensorPosition.Y + 1);
        let below: Position = new Position(sensorPosition.X, sensorPosition.Y - 1);
        let left: Position = new Position(sensorPosition.X - 1, sensorPosition.Y);
        let right: Position = new Position(sensorPosition.X + 1, sensorPosition.Y);

        while (true) {
            let found: boolean = false;
            found = found || this.lookForPositionAlongDiagonal(above, left, beaconPosition);
            found = found || this.lookForPositionAlongDiagonal(left, below, beaconPosition);
            found = found || this.lookForPositionAlongDiagonal(below, right, beaconPosition);
            found = found || this.lookForPositionAlongDiagonal(right, above, beaconPosition);

            if (found) break;
            else {
                above.Y++;
                below.Y--;
                left.X--;
                right.X++;
            }
        }
    }

    private lookForPositionAlongDiagonal(diagStart: Position, diagEnd: Position, toFind: Position): boolean {
        // TODO - Implement
        // go from start to end (exclusive)
        // if we find toFind finish the job then return true
        // paint each part of the grid looked at with '#'
        return false;
    }
}