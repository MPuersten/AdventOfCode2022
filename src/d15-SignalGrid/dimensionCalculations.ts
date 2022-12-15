import Position from "../d09-RopeBridge/position";
import Dimesions2D from "../d14-SandyCave/dimensions2D";

export function getGridDimensions2D(positions2D: Position[][]): Dimesions2D {
    
    let smallestX1: number;
    let largestX2: number;
    let smallestY1: number;
    let largestY2: number;

    positions2D.forEach(value => {
        value.forEach(pos => {
            if (!smallestX1 || pos.X < smallestX1) smallestX1 = pos.X;
            if (!largestX2 || pos.X > largestX2) largestX2 = pos.X;
            if (!smallestY1 || pos.Y < smallestY1) smallestY1 = pos.Y;
            if (!largestY2 || pos.Y > largestY2) largestY2 = pos.Y;
        })
    })

    return new Dimesions2D(smallestX1!, largestX2!, smallestY1!, largestY2!);
}