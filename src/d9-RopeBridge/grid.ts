import Position from "./position";

export default class Grid {
    XHead: number = 0;
    YHead: number = 0;
    XTail: number = 0;
    YTail: number = 0;

    private tailPositions: Position[] = [];

    constructor() {
        this.tailPositions.push(new Position(this.XTail, this.YTail));
    }

    get numUniqueTailPositions(): number {
        return this.tailPositions.length;
    }
    
    performMovement(direction: string, distance: number): void {
        if (direction === 'U') {
            for (let i = 0; i < distance; i++) {
                this.YHead++;
                this.moveTail();
            }
        }
        else if (direction === 'D') {
            for (let i = 0; i < distance; i++) {
                this.YHead--;
                this.moveTail();
            }
        }
        else if (direction === 'R') {
            for (let i = 0; i < distance; i++) {
                this.XHead++;
                this.moveTail();
            }
        }
        else if (direction === 'L') {
            for (let i = 0; i < distance; i++) {
                this.XHead--;
                this.moveTail();
            }
        }
        else {
            throw Error(`Bad direction: ${direction}`);
        }
    }

    private moveTail() {
        // Right
        if (this.XHead > this.XTail + 1) {
            if (this.YHead > this.YTail) this.YTail++;
            else if (this.YHead < this.YTail) this.YTail--;
            this.XTail++;
        }

        // Up
        if (this.YHead > this.YTail + 1) {
            if (this.XHead > this.XTail) this.XTail++;
            else if (this.XHead < this.XTail) this.XTail--;
            this.YTail++;
        }

        // Left
        if (this.XHead < this.XTail - 1) {
            if (this.YHead > this.YTail) this.YTail++;
            else if (this.YHead < this.YTail) this.YTail--;
            this.XTail--;
        }

        // Down
        if (this.YHead < this.YTail - 1) {
            if (this.XHead > this.XTail) this.XTail++;
            else if (this.XHead < this.XTail) this.XTail--;
            this.YTail--;
        }

        this.tryUpdateTailPositions();
    }

    private tryUpdateTailPositions() {
        let newPosition: boolean = true;
        for (let i = 0; i < this.tailPositions.length; i++) {
            if (this.XTail === this.tailPositions[i].X && 
                this.YTail === this.tailPositions[i].Y) {
                    newPosition = false;
                    break;
                }
        }

        if (newPosition) this.tailPositions.push(new Position(this.XTail, this.YTail));
    }
}