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
}