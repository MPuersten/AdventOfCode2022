import Position from "./position";

export default class LinkedNodes {
    private _nodeCount: number;
    private _positions: Position[] = [];
    private _tailPositions: Position[] = [];

    public constructor(numberOfNodes: number) {
        this._nodeCount = numberOfNodes;
        for (let i = 0; i < numberOfNodes; i++) {
            this._positions.push(new Position(0, 0))
        }

        this._tailPositions.push(new Position(0, 0));
    }

    get numUniqueTailPositions(): number {
        return this._tailPositions.length;
    }

    get Positions(): Position[] {
        return this._positions;
    }

    performMovement(direction: string, distance: number): void {
        for (let i = 0; i < distance; i ++) {
            switch (direction) {
                case 'U':
                    this._positions[0].Y++;
                    break;
                case 'D':
                    this._positions[0].Y--;
                    break;
                case 'R':
                    this._positions[0].X++;
                    break;
                case 'L':
                    this._positions[0].X--;
                    break;
                default:
                    throw Error(`Bad direction: ${direction}`);
            }

            this.moveTail();
        }
    }

    private moveTail() {
        for (let i = 0; i < this._positions.length - 1; i++) {
            let newTailPosition = this.moveSegment(this._positions[i], this._positions[i + 1]);
            this._positions[i + 1].X = newTailPosition.X;
            this._positions[i + 1].Y = newTailPosition.Y;

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
        let x: number = this._positions[this._nodeCount - 1].X;
        let y: number = this._positions[this._nodeCount - 1].Y;

        if(!this._tailPositions.some(obj => obj.X === x && obj.Y === y)) {
            this._tailPositions.push(new Position(x, y));
        }
    }
}