
export default class Monkey {    
    private _itemHeld?: number;
    private _numInspections: number = 0;
    
    constructor(
        private _id: number,
        private _items: number[],
        private _operator: string,
        private _operand: string,
        private _divisibleBy: number,
        private _trueMonkey: number,
        private _falseMonkey: number,
    ) {}

    get itemCount(): number {
        return this._items.length;
    }

    get numInspections(): number {
        return this._numInspections;
    }

    inspectNext(anxietyDivider: number): void {
        if (this._items.length > 0) {
            this._itemHeld = this._items.shift();
            
            let numericOperand: string;
            if (this._operand !== 'old') numericOperand = this._operand;
            else numericOperand = this._itemHeld!.toString();

            switch (this._operator) {
                case '+':
                    this._itemHeld = this._itemHeld! + parseInt(numericOperand);
                    break;
                case '-':
                    this._itemHeld = this._itemHeld! - parseInt(numericOperand);
                    break;
                case '*':
                    this._itemHeld = this._itemHeld! * parseInt(numericOperand);
                    break;
                case '/':
                    this._itemHeld = this._itemHeld! / parseInt(numericOperand);
                    break;
            }

            if (anxietyDivider !== 1) this._itemHeld = Math.floor(this._itemHeld! / anxietyDivider);

            this._numInspections++;
        }
    }

    giveItem(item: number): void {
        this._items.push(item);
    }

    throwItem(): number[] {
        if (this._itemHeld! % this._divisibleBy === 0){
            return [this._trueMonkey, this._itemHeld!];
        }
        else {
            return [this._falseMonkey, this._itemHeld!];
        }
    }

    report(): void {
        console.log(`Monkey: ${this._id}`);
        console.log(`Items: ${this._items}`);
        console.log(`Operator: ${this._operator}`);
        console.log(`Operand: ${this._operand}`);
        console.log(`Divisible: ${this._divisibleBy}`);
    }
}