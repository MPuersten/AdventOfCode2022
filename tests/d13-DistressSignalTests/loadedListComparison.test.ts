import * as fs from 'fs'
import { isOrderedCorrectly } from '../../src/d13-DistressSignal/loadedListComparison';


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

        let result: boolean = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(true);
    })

    test('Pair 2, ordered correctly', ()=> {
        let pairIndex: number = 1;

        let result: boolean = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(true);
    })

    test('Pair 3, NOT ordered correctly', ()=> {
        let pairIndex: number = 2;

        let result: boolean = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(false);
    })

    test('Pair 4, ordered correctly', ()=> {
        let pairIndex: number = 3;

        let result: boolean = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(true);
    })

    test('Pair 5, NOT ordered correctly', ()=> {
        let pairIndex: number = 4;

        let result: boolean = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(false);
    })

    test('Pair 6, ordered correctly', ()=> {
        let pairIndex: number = 5;

        let result: boolean = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(true);
    })

    test('Pair 7, NOT ordered correctly', ()=> {
        let pairIndex: number = 6;

        let result: boolean = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(false);
    })

    test('Pair 8, NOT ordered correctly', ()=> {
        let pairIndex: number = 7;

        let result: boolean = isOrderedCorrectly(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(false);
    })

    test('Index sum of all pairs is correctl', () => {
        let indexSum: number = 0;

        for (let i = 0; i < lists.length; i++) {
            if (isOrderedCorrectly(lists[i].left, lists[i].right)) indexSum += (i + 1);
        }

        expect(indexSum).toEqual(13);
    })
})