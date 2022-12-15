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
        this.grid.addContent(sensorPosition, 'S');

        let above: Position = new Position(sensorPosition.X, sensorPosition.Y + 1);
        let below: Position = new Position(sensorPosition.X, sensorPosition.Y - 1);
        let left: Position = new Position(sensorPosition.X - 1, sensorPosition.Y);
        let right: Position = new Position(sensorPosition.X + 1, sensorPosition.Y);

        while (true) {
            let found: boolean = false;
            found = found || this.lookForPositionAlongDiagonal(above, left, beaconPosition);
            found = found || this.lookForPositionAlongDiagonal(left, below, beaconPosition);
            found = found || this.lookForPositionAlongDiagonal(above, right, beaconPosition);
            found = found || this.lookForPositionAlongDiagonal(right, below, beaconPosition);

            if (found) break;
            else {
                above.Y++;
                below.Y--;
                left.X--;
                right.X++;
            }

            break;
        }
    }

    private lookForPositionAlongDiagonal(diagStart: Position, diagEnd: Position, toFind: Position): boolean {
        let currP: Position = new Position(diagStart.X, diagStart.Y);
        
        try {
            while (!currP.overlapsWith(diagEnd)) {
                let gridChar: string = this.grid.getContent(currP);
                if (gridChar !== 'S' && gridChar !== 'B') {
                    this.grid.addContent(currP, '#')
                }

                // shift point towards end
                if (currP.X < diagEnd.X) {
                    if (currP.Y < diagEnd.Y) {
                        currP.X--;
                        currP.Y++;
                    }
                    else throw Error('Not supported direction.')
                }
                else if (currP.X > diagEnd.X) {
                    if (currP.Y > diagEnd.Y) {
                        currP.X++;
                        currP.Y--;
                    }
                    else throw Error('Not supported direction.');
                }
                else throw Error('Points in line horizontally.');
            }

            this.grid.addContent(diagStart, '#');
        } catch (TypeError) {

        }
        
        
        // TODO - Implement
        // go from start to end (exclusive)
        // if we find toFind finish the job then return true
        // paint each part of the grid looked at with '#'
        return false;
    }
}