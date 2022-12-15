import { boolean } from "yargs";
import Position from "../d09-RopeBridge/position";
import Dimesions2D from "./dimensions2D";


export default class RockyGrid2DWithFloor {
    private grid: string[][] = [];
    private dimesions: Dimesions2D;
    private sandCounter: number = 0;

    constructor(rockPlacementNodes: Position[][]) {
        this.dimesions = this.getGridDimensions(rockPlacementNodes);

        this.buildGrid();
        this.addRocksToGrid(rockPlacementNodes);
    }

    private getGridDimensions(rockPlacementNodes: Position[][]): Dimesions2D {
        const smallestY1 = 0;
        
        let smallestX1: number;
        let largestX2: number;
        let largestY2: number;

        rockPlacementNodes.forEach(value => {
            value.forEach(pos => {
                if (!smallestX1 || pos.X < smallestX1) smallestX1 = pos.X;
                if (!largestX2 || pos.X > largestX2) largestX2 = pos.X;
                if (!largestY2 || pos.Y > largestY2) largestY2 = pos.Y;
            })
        })

        smallestX1! -= 160;
        largestX2! += 120;

        return new Dimesions2D(smallestX1!, largestX2!, smallestY1, largestY2!);
    }

    private buildGrid() {
        for (let i = 0; i < this.dimesions.Height + 3; i++) {
            let row: string[] = [];
            for (let j = 0; j < this.dimesions.Width + 1; j++) {
                if (i === this.dimesions.Height + 2) row.push('#');
                else row.push('.')
                
            }

            this.grid.push(row);
        }
    }

    private addRocksToGrid(rockPlacementNodes: Position[][]) {
        rockPlacementNodes.forEach(rockSeries => {
            for ( let i = 0; i < rockSeries.length - 1; i++) {
                this.addRocksBetweenPoints(rockSeries[i], rockSeries[i + 1]);
            }
        })
    }

    private addRocksBetweenPoints(p1: Position, p2: Position) {
        let distance: number;
        let from1to2: boolean;

        // Same column
        if (p1.X === p2.X && p1.Y !== p2.Y) {
            distance = Math.abs(p1.Y - p2.Y) + 1;
            from1to2 = (p1.Y <= p2.Y);

            for (let i = 0; i < distance; i++) {
                if (from1to2) this.addRock(new Position(p1.X, p1.Y + i));
                else this.addRock(new Position(p2.X, p2.Y + i));
            }
        }
        // Same Row
        else if (p1.Y === p2.Y && p1.X !== p2.X) {
            distance = Math.abs(p1.X - p2.X) + 1;
            from1to2 = (p1.X <= p2.X);

            for (let i = 0; i < distance; i++) {
                if (from1to2) this.addRock(new Position(p1.X + i, p1.Y));
                else this.addRock(new Position(p2.X + i, p2.Y));
            }
        }
        else {
            throw Error("Points do not line up with eachother.");
        }
    }

    private printPoint(point: Position, name: string) {
        console.log(`${name}: ${point.X}, ${point.Y}`);
    }

    private addRock(position: Position) {
        this.addContent(position, '#');
    }

    dropSandUntilItGoesOffGrid(column: number) {
        while(this.dropSandFromTop(column)) {
            this.sandCounter++;
        }
    }

    private dropSandFromTop(column: number): boolean {
        let sandPosition: Position;
        try {
            sandPosition = this.addSandAtTop(column);
        } catch (Error) {
            return false;
        }
        

        while(true) {
            try {
                if (this.isSandAtRest(sandPosition)) {
                    return true;
                }

                sandPosition = this.sandFall(sandPosition!);
            } catch (error) {
                return false;
            }
        }
    }

    private addSandAtTop(column: number) {
        let sandPosition = new Position(500, 0);
        if (this.getContent(sandPosition) === 'O') throw Error();

        this.addContent(sandPosition, 'O');

        return sandPosition;
    }

    private addContent(position: Position, symbol: string) {
        const gridX = position.Y;
        const gridY = position.X - this.dimesions.X1;

        this.grid[gridX][gridY] = symbol;
    }

    private isSandAtRest(position: Position): boolean {
        if(this.getContent(position) !== 'O') throw Error("sandFall given non-sand position.");

        let testPos = new Position(position.X, position.Y + 1);
        let testPosLeft = new Position(position.X - 1, position.Y + 1);
        let testPosRigth = new Position(position.X + 1, position.Y + 1);

        let below: string = this.getContent(testPos);
        let left: string = this.getContent(testPosLeft);
        let right: string = this.getContent(testPosRigth);

        if (below === '.' ||
            left === '.'  ||
            right === '.') {
                
            return false;
        }
        else if (
            below === undefined ||
            left === undefined ||
            right === undefined) {

            throw Error('Done');
        }
        else {
            return true;
        }
    }

    private sandFall(position: Position): Position {
        if(this.getContent(position) !== 'O') throw Error("sandFall given non-sand position.");

        let testPos = new Position(position.X, position.Y + 1);
        let testPosLeft = new Position(position.X - 1, position.Y + 1);
        let testPosRigth = new Position(position.X + 1, position.Y + 1);

        let result: boolean;
        
        result = this.sandFellTo(position, testPos);
        if (result) return testPos;

        result = this.sandFellTo(position, testPosLeft);
        if (result) return testPosLeft;

        result = this.sandFellTo(position, testPosRigth);
        if (result) return testPosRigth;

        throw Error("Sand is at rest, this should not be called.")
    }

    private sandFellTo(from: Position, to: Position): boolean {
            if (this.getContent(to) === '.') {
                this.addContent(from, '.');
                this.addContent(to, 'O');
                return true;
            }
            else return false;
    }

    private getContent(position: Position): string {
        const gridX = position.Y;
        const gridY = position.X - this.dimesions.X1;

        return this.grid[gridX][gridY];
    }

    getSandCount(): number {
        return this.sandCounter;
    }

    printGrid() {
        this.grid.forEach(row => {
            console.log(row.join(''));
        })
    }
}

