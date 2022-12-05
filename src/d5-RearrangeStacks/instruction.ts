export default class Instruction {
    private _containersToMove: number;
    
    constructor(instructionText: string) {

    }

    public get containersToMove(): number {
        return this._containersToMove;
    }

    public enact(stacks: string[][]): string[][] {
        return [];
    }
}