type X = number;
type Y = number;
export type Translation = [X, Y];

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

    copy(): Position {
        return new Position(this.X, this.Y);
    }
    
    translate(translation: Translation): Position {
        this.X += translation[0];
        this.Y += translation[1];
        return this;
      }

    print(): void {
        console.log(`Point - X: ${this.X}, Y: ${this.Y}`);
    }
}