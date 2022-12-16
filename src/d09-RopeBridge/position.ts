export default class Position {
    X: number;
    Y: number;
    
    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    overlapsWith(otherPosition: Position): boolean {
        return (this.X === otherPosition.X && this.Y === otherPosition.Y);
    }

    print(): void {
        console.log(`Point - X: ${this.X}, Y: ${this.Y}`);
    }
}