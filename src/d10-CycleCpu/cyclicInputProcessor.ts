export default class CyclicInputProcessor {
    private _instructions: string[];
    private _cycleCompleted: number = 0;
    private _instructionStep = 0;
    private _midProcess: boolean = false;
    private _printingEnabled = false;

    private _xMidCycle: number = 1;
    private _x: number = 1;
    
    constructor(instructions: string[], printingEnabled?: boolean) {
        this._instructions = instructions;
        if (printingEnabled)
            this._printingEnabled = printingEnabled;
    }

    get signalStrength() {
        return this._cycleCompleted * this._xMidCycle;
    }

    execute(numCycles: number) {
        let row: string = "";

        for (let i = 0; i < numCycles; i++) {
            this._xMidCycle = this._x;

            if (this._instructions[this._instructionStep] !== undefined) {
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
            }

            if (this.inSprite(this._cycleCompleted % 40)) {
                row += "#";
            }
            else {
                row += '.';
            }

            // Prep for next cycle
            this._cycleCompleted++;

            if (this._printingEnabled && row.length === 40) {
                console.log(row);
                row = "";
            }
        }       
    }

    inSprite(position: number){
        return (position === this._xMidCycle ||
            position === this._xMidCycle - 1 ||
            position === this._xMidCycle + 1);
    }
}