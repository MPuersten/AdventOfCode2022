import { getCharacterPriority } from "../d3-Rucksack/characterPriorityTranslator";
import Position from "../d9-RopeBridge/position";
import ValuePosition from "./valuePosition";

export default class Heightmap {
    private _heights: number[][] = [];
    private _letters: string[][] = [];
    private _startPosition: Position = new Position(0, 0);
    private _endPosition: Position = new Position(0, 0);
    
    constructor(heightmapText: string[]) {
        for (let i = 0; i < heightmapText.length; i++) {
            let startIndex = heightmapText[i].indexOf('S');
            let endIndex = heightmapText[i].indexOf('E');

            if (startIndex !== -1) this._startPosition = new Position(i, startIndex);
            if (endIndex !== -1) this._endPosition = new Position(i, endIndex);

            let row: string[] = heightmapText[i].split('');
            this._letters.push(row);

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
        }
    }

    findShortestPathToGoal(): number {
        let validNeighborQueue: ValuePosition[] = [];
        let visitedPoints: Position[] = [];

        validNeighborQueue.push(new ValuePosition(this._startPosition.X, this._startPosition.Y, 0));
        visitedPoints.push(new Position(this._startPosition.X, this._startPosition.Y));
            
        while (validNeighborQueue.length > 0) {
            let itemWithDistance: ValuePosition = validNeighborQueue.shift()!;
            if (this.isSamePosition(itemWithDistance as Position, this._endPosition)) {
                    //this.printMapOfPointsListed(visitedPoints);
                    return itemWithDistance.Value;
            }

            let neighbors: Position[] = this.getValidNeighbors(itemWithDistance);
            for (let i = 0; i < neighbors.length; i++) {
                if (!this.isItemInList(visitedPoints, neighbors[i])) {
                    validNeighborQueue.push(new ValuePosition(neighbors[i].X, neighbors[i].Y, itemWithDistance.Value + 1));
                    visitedPoints.push(new Position(neighbors[i].X, neighbors[i].Y));
                }
            }
        }
        
        this.printMapOfPointsListed(visitedPoints);
        throw Error('No Path Found');
    }

    findShortestPathFromGoalToLowestLevel(): number {
        let validNeighborQueue: ValuePosition[] = [];
        let visitedPoints: Position[] = [];

        validNeighborQueue.push(new ValuePosition(this._endPosition.X, this._endPosition.Y, 0));
        visitedPoints.push(new Position(this._endPosition.X, this._endPosition.Y));
            
        while (validNeighborQueue.length > 0) {
            let itemWithDistance: ValuePosition = validNeighborQueue.shift()!;
            if (this._letters[itemWithDistance.X][itemWithDistance.Y] === 'a') {
                    //this.printMapOfPointsListed(visitedPoints);
                    return itemWithDistance.Value;
            }

            let neighbors: Position[] = this.getValidNeighborsDownward(itemWithDistance);
            for (let i = 0; i < neighbors.length; i++) {
                if (!this.isItemInList(visitedPoints, neighbors[i])) {
                    validNeighborQueue.push(new ValuePosition(neighbors[i].X, neighbors[i].Y, itemWithDistance.Value + 1));
                    visitedPoints.push(new Position(neighbors[i].X, neighbors[i].Y));
                }
            }
        }
        
        this.printMapOfPointsListed(visitedPoints);
        throw Error('No Path Found');
    }

    private printMapOfPointsListed(points: Position[]): void {
        let out: string[][] = [];

        // Make blank canvas
        for (let i = 0; i < this._heights.length; i++) {
            let newRow: string[] = [];
            for (let j = 0; j < this._heights[0].length; j++) {
                newRow.push('.');
            }

            out.push(newRow);
        }

        // Replace points listed
        for (let i = 0; i < points.length; i++) {
            out[points[i].X][points[i].Y] = this._letters[points[i].X][points[i].Y];
        }

        for (let i = 0; i < out.length; i++){
            console.log(`${out[i]}`);
        }
    }

    private isItemInList(list: Position[], item: Position): boolean {
        for (let i = 0; i < list.length; i++) {
            if (this.isSamePosition(list[i], item)) return true;
        }

        return false;
    }

    private isSamePosition(pos1: Position, pos2: Position): boolean {
        return (pos1.X === pos2.X && pos1.Y === pos2.Y);
    }

    private getValidNeighbors(pos: Position): Position[] {
        let positions: Position[] = [];
        
        const neighbors = [
          new Position(pos.X - 1, pos.Y),
          new Position(pos.X + 1, pos.Y),
          new Position(pos.X, pos.Y - 1),
          new Position(pos.X, pos.Y + 1)
        ];
      
        for (const neighbor of neighbors) {
            if (this.isValidNeighbor(pos, neighbor)) {
            positions.push(neighbor);
            }
        }
      
        return positions;
    }

    private isValidNeighbor(pos: Position, neighbor: Position): boolean {
        // edge protection
        if (neighbor.X < 0 || 
            neighbor.X >= this._heights.length || 
            neighbor.Y < 0 || 
            neighbor.Y >= this._heights[0].length) {
            return false;
        }
        
        // can jump down, but only climb by 1
        return (this._heights[pos.X][pos.Y] - this._heights[neighbor.X][neighbor.Y] >= -1);
    }
      
    private getValidNeighborsDownward(pos: Position): Position[] {
        let positions: Position[] = [];
        
        const neighbors = [
          new Position(pos.X - 1, pos.Y),
          new Position(pos.X + 1, pos.Y),
          new Position(pos.X, pos.Y - 1),
          new Position(pos.X, pos.Y + 1)
        ];
      
        for (const neighbor of neighbors) {
            if (this.isValidNeighborDownward(pos, neighbor)) {
            positions.push(neighbor);
            }
        }
      
        return positions;
    }

    private isValidNeighborDownward(pos: Position, neighbor: Position): boolean {
        // edge protection
        if (neighbor.X < 0 || 
            neighbor.X >= this._heights.length || 
            neighbor.Y < 0 || 
            neighbor.Y >= this._heights[0].length) {
            return false;
        }
        
        // can climb up, but only jump down 1
        return (this._heights[pos.X][pos.Y] - this._heights[neighbor.X][neighbor.Y] <= 1);
    }
}