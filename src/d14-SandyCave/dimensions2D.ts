import Position from "../d09-RopeBridge/position";

export default class Dimesions2D {
    constructor(
        public X1: number, 
        private X2: number, 
        public Y1: number, 
        public Y2: number) {
    }

    get Width(): number {
        return this.X2 - this.X1;
    }

    get Height(): number {
        return this.Y2 - this.Y1
    }
}