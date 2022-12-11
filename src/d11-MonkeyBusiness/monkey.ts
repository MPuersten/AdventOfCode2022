
export default class Monkey {    
    private _itemHeld?: number;
    private _numInspections: number = 0;
    
    constructor(
        private _id: number,
        private _items: number[],
        private _operation: string,
        private _divisibleBy: number,
        private _trueMonkey: number,
        private _falseMonkey: number
    ) {}

    get itemCount(): number {
        return this._items.length;
    }

    inspectNext(): void {
        if (this._items.length > 0) {
            this._itemHeld = this._items.shift();
            
            let fullOperation = String(this._itemHeld) + this._operation;
            this._itemHeld = eval(fullOperation);
            this._numInspections++;
        }
    }

    giveItem(item: number): void {
        this._items.push(item);
    }

    throwItem(): number[] {
        if (this._itemHeld! % this._divisibleBy !== 0){
            return [this._trueMonkey, this._itemHeld!];
        }
        else {
            return [this._falseMonkey, this._itemHeld!];
        }
    }
}