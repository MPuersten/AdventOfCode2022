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
            console.log('Finished point');
        })
    }

    scanPoint(sensorPosition: Position, beaconPosition: Position) {
        // sensorPosition.print();
        // beaconPosition.print();
        this.grid.addContent(sensorPosition, 'S');
        this.grid.addContent(beaconPosition, 'B');
        // console.log('');

        // this.grid.printGrid();

        let above: Position = new Position(sensorPosition.X, sensorPosition.Y - 1);
        let below: Position = new Position(sensorPosition.X, sensorPosition.Y + 1);
        let left: Position = new Position(sensorPosition.X - 1, sensorPosition.Y);
        let right: Position = new Position(sensorPosition.X + 1, sensorPosition.Y);

        let counter: number = 0;
        while (true) {
            let found: boolean = false;
            found = this.lookForPositionAlongDiagonal(left, above) || found;
            found = this.lookForPositionAlongDiagonal(below, left) || found;
            found = this.lookForPositionAlongDiagonal(above, right) || found;
            found = this.lookForPositionAlongDiagonal(right, below) || found;

            if (found) {
                // console.log('Found');
                break;
            }
            else {
                above.Y--;
                below.Y++;
                left.X--;
                right.X++;
            }

            if (counter % 10000 === 0) {
                console.log(`Checkpoint: ${counter}`);
            }
            counter++;
        }
    }

    private lookForPositionAlongDiagonal(diagStart: Position, diagEnd: Position): boolean {
        let currP: Position = new Position(diagStart.X, diagStart.Y);
        let foundBeacon: boolean = false;

        let counter: number = 0;
        while (!currP.overlapsWith(diagEnd)) {
            try {
                let gridChar: string = this.grid.getContent(currP);
                if (gridChar !== 'S' && gridChar !== 'B') {
                    if (gridChar !== undefined) this.grid.addContent(currP, '#');
                }
                if (gridChar === 'B') {
                    foundBeacon = true;
                    
                } 

                
            } catch (TypeError) {
                
            }

            this.getNextDiagonalPoint(currP, diagEnd);
            // if (counter === 10) break;
            // counter++;
        }

        return foundBeacon;
    }

    private getNextDiagonalPoint(currP: Position, diagEnd: Position) {
        // shift point towards end
        if (currP.X < diagEnd.X) {
            if (currP.Y < diagEnd.Y) {
                currP.X++;
                currP.Y++;
            }
            else if (currP.Y > diagEnd.Y) {
                currP.X++;
                currP.Y--;
            }
            else throw Error('Not supported direction.')
        }
        else if (currP.X > diagEnd.X) {
            if (currP.Y > diagEnd.Y) {
                currP.X--;
                currP.Y--;
            }
            else if (currP.Y < diagEnd.Y) {
                currP.X--;
                currP.Y++;
            }
            else throw Error('Not supported direction.');
        }
        else throw Error('Points in line horizontally.');
    }
}