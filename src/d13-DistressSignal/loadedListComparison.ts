export enum Order {
    Correct,
    Incorrect,
    Continue
}

export function isOrderedCorrectly(left: any[], right: any[]): Order {
    const size: number = Math.max(left.length, right.length);

    for (let i = 0; i < size; i++) {
        const l = left[i];
        const r = right[i];

        if (isNum(l) && isNum(r)) {
            if(l < r) return Order.Correct;
            if(l > r) return Order.Incorrect;
        }
        else if (isObj(l) && isObj(r)) {
            const result: Order = isOrderedCorrectly(l, r);
            if (result !== Order.Continue) return result;
        }
        else if (isNum(l)) {
            const result: Order = isOrderedCorrectly([l], r);
            if (result !== Order.Continue) return result;
        }
        else if (isNum(r)) {
            const result: Order = isOrderedCorrectly(l, [r]);
            if (result !== Order.Continue) return result;
        }
        else if (!l && r) {
            return Order.Correct;
        }
        else if (l && !r) {
            return Order.Incorrect;
        }
    }

    return Order.Continue;
}

function isNum(element: any) {
    return (typeof(element) === 'number');
}

function isObj(element: any) {
    return (typeof(element) === 'object');
}