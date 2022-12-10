export default class CyclicInputProcessor {
    private _instructions: string[];
    private _cycleCompleted: number = 0;
    private _instructionStep = 0;
    private _midProcess: boolean = false;

    private _x: number = 1;
    
    constructor(instructions: string[]) {
        this._instructions = instructions;
    }

    get signalStrength() {
        return this._cycleCompleted * this._x;
    }

    execute(numCycles: number) {
        let params: string[] = this._instructions[this._instructionStep].split(' ');
        if(params[0] === 'addx') {
            if (this._midProcess) {
                this._midProcess = false;

                this._x += parseInt(params[1]);
                this._instructionStep++;
            }
            else /*new add*/ {
                this._midProcess = true;
            }
        }
        else if (params[0] === 'noop') {
            this._instructionStep++;
        }
        else throw Error(`Bad params: ${params}`);

        // Prep for next cycle
        this._cycleCompleted++;
    }


}