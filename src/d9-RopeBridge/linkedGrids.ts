
import Position from "./position";

export default class LinkedGrids {
    XPositions: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    YPositions: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    private tailPositions: Position[] = [];
    
    constructor() {
        this.tailPositions.push(new Position(0, 0));
    }

    get numUniqueTailPositions(): number {
        return this.tailPositions.length;
    }

    performMovement(direction: string, distance: number): void {
        if (direction === 'U') {
            for (let i = 0; i < distance; i++) {
                this.YPositions[0]++;
                this.moveTail();
            }
        }
        else if (direction === 'D') {
            for (let i = 0; i < distance; i++) {
                this.YPositions[0]--;
                this.moveTail();
            }
        }
        else if (direction === 'R') {
            for (let i = 0; i < distance; i++) {
                this.XPositions[0]++;
                this.moveTail();
            }
        }
        else if (direction === 'L') {
            for (let i = 0; i < distance; i++) {
                this.XPositions[0]--;
                this.moveTail();
            }
        }
        else {
            throw Error(`Bad direction: ${direction}`);
        }
    }

    private moveTail() {
        for (let i = 0; i < this.XPositions.length - 1; i++) {
            let head: Position = new Position(this.XPositions[i], this.YPositions[i]);
            let tail: Position = new Position(this.XPositions[i + 1], this.YPositions[i + 1]);

            let newTailPosition = this.moveSegment(head, tail);
            this.XPositions[i + 1] = newTailPosition.X;
            this.YPositions[i + 1] = newTailPosition.Y;

            this.tryUpdateTailPositions();
        }
    }

    private moveSegment(headPosition: Position, tailPosition: Position): Position {
        // Right
        if (headPosition.X > tailPosition.X + 1) {
            if (headPosition.Y > tailPosition.Y) tailPosition.Y++;
            else if (headPosition.Y < tailPosition.Y) tailPosition.Y--;
            tailPosition.X++;
        }

        // Up
        if (headPosition.Y > tailPosition.Y + 1) {
            if (headPosition.X > tailPosition.X) tailPosition.X++;
            else if (headPosition.X < tailPosition.X) tailPosition.X--;
            tailPosition.Y++;
        }

        // Left
        if (headPosition.X < tailPosition.X - 1) {
            if (headPosition.Y > tailPosition.Y) tailPosition.Y++;
            else if (headPosition.Y < tailPosition.Y) tailPosition.Y--;
            tailPosition.X--;
        }

        // Down
        if (headPosition.Y < tailPosition.Y - 1) {
            if (headPosition.X > tailPosition.X) tailPosition.X++;
            else if (headPosition.X < tailPosition.X) tailPosition.X--;
            tailPosition.Y--;
        }

        return tailPosition;
    }

    private tryUpdateTailPositions() {
        let newPosition: boolean = true;
        for (let i = 0; i < this.tailPositions.length; i++) {
            if (this.XPositions[this.XPositions.length - 1] === this.tailPositions[i].X && 
                this.YPositions[this.YPositions.length - 1] === this.tailPositions[i].Y) {
                    newPosition = false;
                    break;
                }
        }

        if (newPosition) this.tailPositions.push(new Position(
            this.XPositions[this.XPositions.length - 1], 
            this.YPositions[this.YPositions.length - 1]));
    }
}