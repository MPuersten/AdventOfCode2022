import Position from "../d9-RopeBridge/position";

export default class ValuePosition extends Position {
    Value: number;

    constructor(x: number, y: number, value: number) {
        super(x, y);

        this.Value = value;
    }
}