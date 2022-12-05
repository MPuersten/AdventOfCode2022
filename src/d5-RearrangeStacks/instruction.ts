export default class Instruction {
    private _containersToMove: number;
    private _from: number;
    private _to: number;
    
    constructor(instructionText: string) {
        let words: string[] = instructionText.split(' ');

        this._containersToMove = parseInt(words[1]);
        this._from = parseInt(words[3]);
        this._to = parseInt(words[5]);
    }

    public get containersToMove(): number {
        return this._containersToMove;
    }

    public get from(): number {
        return this._from;
    }

    public get to(): number {
        return this._to;
    }

    public enact(stacks: string[][]): string[][] {
        for (let i = 0; i < this._containersToMove; i++) {
            let container = stacks[this._from - 1].pop();

            if (container != undefined) stacks[this._to - 1].push(container);
            else throw Error("Bad contianer push/pop");
        }

        return stacks;
    }
}