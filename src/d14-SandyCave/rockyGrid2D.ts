import Position from "../d09-RopeBridge/position";
import Dimesions2D from "./dimensions2D";


export default class RockyGrid2D {
    private grid: string[][] = [];
    private dimesions: Dimesions2D;

    constructor(rockPlacementNodes: Position[][]) {
        this.dimesions = this.getGridDimensions(rockPlacementNodes);
        // this.buildGrid(rockPlacementNodes);
    }

    private getGridDimensions(rockPlacementNodes: Position[][]): Dimesions2D {
        const smallestY1 = 0;
        
        let smallestX1: number;
        let largestX2: number;
        let largestY2: number;

        rockPlacementNodes.forEach(value => {
            value.forEach(pos => {
                if (!smallestX1 || pos.X < smallestX1) smallestX1 = pos.X;
                if (!largestX2 || pos.X > largestX2) largestX2 = pos.X;
                if (!largestY2 || pos.Y > largestY2) largestY2 = pos.Y;
            })
        })

        console.log(`Grid dimensions X1: ${smallestX1!}, X2: ${largestX2!}, Y1: ${smallestY1}, Y2: ${largestY2!}`);

        return new Dimesions2D(smallestX1!, largestX2!, smallestY1, largestY2!);
    }

    // private buildGrid(rockPlacementNodes: Position[][]) {
    //     let gridTop
    //     for
    // }

    // printGrid() {
    //     console.log()
    // }
}

