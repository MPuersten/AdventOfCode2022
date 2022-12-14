import * as fs from 'fs'
import { isOrderedCorrectly, Order } from '../../src/d13-DistressSignal/loadedListComparison';


describe('Loaded List Comparison', () => {
    let lists: any[] = [];

    beforeEach(() => {
        let signalPairText: string[] = (fs.readFileSync('./assets/d13/d13-sample.txt', 'utf-8')).split(/\r?\n/);
        
        for (let i = 0; i < signalPairText.length; i += 3) {
            let left: any[] = JSON.parse(signalPairText[i]);
            let right: any[] = JSON.parse(signalPairText[i + 1]);

            lists.push({
                'left': left,
                'right': right
            });
        }
    })

    afterEach(() => {
        lists = [];
    })

    test('Pair 1, ordered correctly', ()=> {
        let pairIndex: number = 0;

        let result: Order = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(Order.Correct);
    })

    test('Pair 2, ordered correctly', ()=> {
        let pairIndex: number = 1;

        let result: Order = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(Order.Correct);
    })

    test('Pair 3, NOT ordered correctly', ()=> {
        let pairIndex: number = 2;

        let result: Order = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(Order.Incorrect);
    })

    test('Pair 4, ordered correctly', ()=> {
        let pairIndex: number = 3;

        let result: Order = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(Order.Correct);
    })

    test('Pair 5, NOT ordered correctly', ()=> {
        let pairIndex: number = 4;

        let result: Order = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(Order.Incorrect);
    })

    test('Pair 6, ordered correctly', ()=> {
        let pairIndex: number = 5;

        let result: Order = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(Order.Correct);
    })

    test('Pair 7, NOT ordered correctly', ()=> {
        let pairIndex: number = 6;

        let result: Order = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(Order.Incorrect);
    })

    test('Pair 8, NOT ordered correctly', ()=> {
        let pairIndex: number = 7;

        let result: Order = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(Order.Incorrect);
    })

    test('Index sum of all pairs is correctl', () => {
        let indexSum: number = 0;

        for (let i = 0; i < lists.length; i++) {
            if (isOrderedCorrectly(lists[i].left, lists[i].right) === Order.Correct) 
                indexSum += (i + 1);
        }

        expect(indexSum).toEqual(13);
    })
})