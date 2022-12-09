import Position from "./position";

export default class LinkedGrids {
    private _nodeCount: number;
    private tailPositions: Position[] = [];

    Positions: Position[] = [];
    
    public constructor(numberOfNodes: number) {
        this._nodeCount = numberOfNodes;
        for (let i = 0; i < numberOfNodes; i++) {
            this.Positions.push(new Position(0, 0))
        }

        this.tailPositions.push(new Position(0, 0));
    }

    get numUniqueTailPositions(): number {
        return this.tailPositions.length;
    }

    performMovement(direction: string, distance: number): void {
        if (direction === 'U') {
            for (let i = 0; i < distance; i++) {
                this.Positions[0].Y++;
                this.moveTail();
            }
        }
        else if (direction === 'D') {
            for (let i = 0; i < distance; i++) {
                this.Positions[0].Y--;
                this.moveTail();
            }
        }
        else if (direction === 'R') {
            for (let i = 0; i < distance; i++) {
                this.Positions[0].X++;
                this.moveTail();
            }
        }
        else if (direction === 'L') {
            for (let i = 0; i < distance; i++) {
                this.Positions[0].X--;
                this.moveTail();
            }
        }
        else {
            throw Error(`Bad direction: ${direction}`);
        }
    }

    private moveTail() {
        for (let i = 0; i < this.Positions.length - 1; i++) {
            let newTailPosition = this.moveSegment(this.Positions[i], this.Positions[i + 1]);
            this.Positions[i + 1].X = newTailPosition.X;
            this.Positions[i + 1].Y = newTailPosition.Y;

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
            if (this.Positions[this._nodeCount - 1].X === this.tailPositions[i].X && 
                this.Positions[this._nodeCount - 1].Y === this.tailPositions[i].Y) {
                    newPosition = false;
                    break;
                }
        }

        if (newPosition) this.tailPositions.push(new Position(
            this.Positions[this._nodeCount - 1].X, 
            this.Positions[this._nodeCount - 1].Y));
    }
}