import { boolean } from "yargs";
import Position from "../d09-RopeBridge/position";
import Dimesions2D from "./dimensions2D";


export default class RockyGrid2D {
    private grid: string[][] = [];
    private dimesions: Dimesions2D;

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

        return new Dimesions2D(smallestX1!, largestX2!, smallestY1, largestY2!);
    }

    private buildGrid() {
        for (let i = 0; i < this.dimesions.Height + 1; i++) {
            let row: string[] = [];
            for (let j = 0; j < this.dimesions.Width + 1; j++) {
                row.push('.')
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
        console.log("Placing new series of rocks...");
        let distance: number;
        let from1to2: boolean;

        // Same column
        if (p1.X === p2.X && p1.Y !== p2.Y) {
            console.log("Along a column..");
            distance = Math.abs(p1.Y - p2.Y) + 1;
            from1to2 = (p1.Y <= p2.Y);

            for (let i = 0; i < distance; i++) {
                if (from1to2) this.addRock(new Position(p1.X, p1.Y + i));
                else this.addRock(new Position(p2.X, p2.Y + i));
            }
        }
        // Same Row
        else if (p1.Y === p2.Y && p1.X !== p2.X) {
            console.log("Along a row..");
            distance = Math.abs(p1.X - p2.X + 1);
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
        const gridX = position.Y;
        const gridY = position.X - this.dimesions.X1;

        console.log(`Placing rock at ${gridX}, ${gridY} (${position.X}, ${position.Y})`);

        this.grid[gridX][gridY] = '#';
    }

    printGrid() {
        this.grid.forEach(row => {
            console.log(row.join(''));
        })
    }
}

