import Position from "../d09-RopeBridge/position";
import Dimesions2D from "../d14-SandyCave/dimensions2D";

export default class Grid {
    private grid: string[][] = [];

    constructor(
        private dimensions: Dimesions2D,
        private defaultCharacter: string = '.') {

        this.buildGrid();
    }

    private buildGrid() {
        for (let i = 0; i < this.dimensions.Height + 1; i++) {
            let row: string[] = [];
            for (let j = 0; j < this.dimensions.Width + 1; j++) {
                row.push(this.defaultCharacter)
            }

            this.grid.push(row);
        }
    }

    addContentBetweenPoints(p1: Position, p2: Position, char: string) {
        let distance: number;
        let from1to2: boolean;

        // Same column
        if (p1.X === p2.X && p1.Y !== p2.Y) {
            distance = Math.abs(p1.Y - p2.Y) + 1;
            from1to2 = (p1.Y <= p2.Y);

            for (let i = 0; i < distance; i++) {
                if (from1to2) this.addContent(new Position(p1.X, p1.Y + i), char);
                else this.addContent(new Position(p2.X, p2.Y + i), char);
            }
        }
        // Same Row
        else if (p1.Y === p2.Y && p1.X !== p2.X) {
            distance = Math.abs(p1.X - p2.X) + 1;
            from1to2 = (p1.X <= p2.X);

            for (let i = 0; i < distance; i++) {
                if (from1to2) this.addContent(new Position(p1.X + i, p1.Y), char);
                else this.addContent(new Position(p2.X + i, p2.Y), char);
            }
        }
        else {
            throw Error("Points do not line up with eachother.");
        }
    }

    printPoint(point: Position, name: string) {
        console.log(`${name}: ${point.X}, ${point.Y}`);
    }

    addContent(position: Position, symbol: string) {
        const gridX = position.Y;
        const gridY = position.X - this.dimensions.X1;

        this.grid[gridX][gridY] = symbol;
    }

    getContent(position: Position): string {
        const gridX = position.Y;
        const gridY = position.X - this.dimensions.X1;

        return this.grid[gridX][gridY];
    }

    printGrid() {
        this.grid.forEach(row => {
            console.log(row.join(''));
        })
    }
}
