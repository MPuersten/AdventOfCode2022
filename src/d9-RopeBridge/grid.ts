import Position from "./position";

export default class Grid {
    XHead: number = 0;
    YHead: number = 0;
    XTail: number = 0;
    YTail: number = 0;

    private tailPositions: Position[] = [];

    get numUniqueTailPositions(): number {
        return this.tailPositions.length;
    }
    
    performMovement(direction: string, distance: number): void {

    }
}