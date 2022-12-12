import { getCharacterPriority } from "../d3-Rucksack/characterPriorityTranslator";
import Position from "../d9-RopeBridge/position";

export default class Heightmap {
    private _heights: number[][] = [];;
    private _startPosition: Position = new Position(0, 0);
    private _endPosition: Position = new Position(0, 0);
    
    constructor(heightmapText: string[]) {
        for (let i = 0; i < heightmapText.length; i++) {
            let startIndex = heightmapText[i].indexOf('S');
            let endIndex = heightmapText[i].indexOf('E');

            if (startIndex !== -1) this._startPosition = new Position(i, startIndex);
            if (endIndex !== -1) this._endPosition = new Position(i, endIndex);

            let row: string[] = heightmapText[i].split('');
            let numericHeights: number[] = row.map(height => this.getNumericHeight(height));
            this._heights.push(numericHeights);
        }
    }

    getNumericHeight(characterHeight: string): number {
        if (characterHeight === 'E') return 27;
        if (characterHeight === 'S') return 1;
        else return getCharacterPriority(characterHeight);
    }

    printGridWithPositions(): void {
        for (let i = 0; i < this._heights.length; i++) {
            let lineOut: string[] = this._heights[i].map(char => char.toString());
            if (i === this._startPosition.X) lineOut[this._startPosition.Y] = 'S';
            if (i === this._endPosition.X) lineOut[this._endPosition.Y] = 'E';

            console.log(lineOut.join(','));
        }
    }

    findShortestPathToGoal(): number {
        let queue: any = [];
        let visited: any = [];

        queue.push([[this._startPosition.X, this._startPosition.Y], 0]);
        visited.push([this._startPosition.X, this._startPosition.Y]);
            
        while (queue.length > 0) {
            let itemWithDistance: any = queue.shift();
            if (itemWithDistance[0][0] === this._endPosition.X &&
                itemWithDistance[0][1] === this._endPosition.Y) {
                    return itemWithDistance[1];
            }

            let neighbors: Position[] = this.getValidNeighbors(this._startPosition);
            for (let i = 0; i < neighbors.length; i++) {
                //if (!visited.has([neighbors[i].X, neighbors[i].Y])) {
                if (!this.inList(visited, [neighbors[i].X, neighbors[i].Y])) {
                    queue.push([[neighbors[i].X, neighbors[i].Y], itemWithDistance[1] + 1]);
                    visited.push([neighbors[i].X, neighbors[i].Y]);
                    console.log(`${neighbors[i].X}, ${neighbors[i].Y}`);
                    console.log(visited);
                }
            }
        }
        
        throw Error('No Path');
    }

    private inList(list: any, item: number[]): boolean {
        for (let i = 0; i < list.length; i++) {
            if (list[i][0] === item[0] && list[i][1] === item[1]) return true;
        }

        return false;
    }

    private getValidNeighbors(pos: Position): Position[] {
        let positions: Position[] = [];
        
        if (pos.X > 0) {
            if (
                this._heights[pos.X - 1][pos.Y] <= (this._heights[pos.X][pos.Y] + 1) &&
                this._heights[pos.X - 1][pos.Y] >= (this._heights[pos.X][pos.Y] - 1)
            ) {
                positions.push(new Position(pos.X - 1, pos.Y));
            }
        }

        if (pos.X < this._heights.length) {
            if (
                this._heights[pos.X + 1][pos.Y] <= (this._heights[pos.X][pos.Y] + 1) &&
                this._heights[pos.X + 1][pos.Y] >= (this._heights[pos.X][pos.Y] - 1)
            ) {
                positions.push(new Position(pos.X + 1, pos.Y));
            }
        }

        if (pos.Y > 0) {
            if (
                this._heights[pos.X][pos.Y - 1] <= (this._heights[pos.X][pos.Y] + 1) &&
                this._heights[pos.X][pos.Y - 1] >= (this._heights[pos.X][pos.Y] - 1)
            ) {
                positions.push(new Position(pos.X, pos.Y - 1));
            }
        }

        if (pos.Y < this._heights[0].length) {
            if (
                this._heights[pos.X][pos.Y + 1] <= (this._heights[pos.X][pos.Y] + 1) &&
                this._heights[pos.X][pos.Y + 1] >= (this._heights[pos.X][pos.Y] - 1)
            ) {
                positions.push(new Position(pos.X, pos.Y + 1));
            }
        }

        return positions;
    }
}