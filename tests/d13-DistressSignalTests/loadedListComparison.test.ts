import * as fs from 'fs'
import { isRightGreaterThanLeft as isLeftLessOrEqual } from '../../src/d13-DistressSignal/loadedListComparison';


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

            console.log(lists);
        }
    })

    test('Pair 1, ordered correctly', ()=> {
        let pairIndex: number = 0;

        let result: boolean = isLeftLessOrEqual(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(true);
    })

    test('Pair 2, ordered correctly', ()=> {
        let pairIndex: number = 1;

        let result: boolean = isLeftLessOrEqual(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(true);
    })

    test('Pair 3, ordered correctly', ()=> {
        let pairIndex: number = 2;

        let result: boolean = isLeftLessOrEqual(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(false);
    })

    test('Pair 4, ordered correctly', ()=> {
        let pairIndex: number = 3;

        let result: boolean = isLeftLessOrEqual(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(true);
    })

    test('Pair 5, ordered correctly', ()=> {
        let pairIndex: number = 4;

        let result: boolean = isLeftLessOrEqual(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(false);
    })

    test('Pair 6, ordered correctly', ()=> {
        let pairIndex: number = 5;

        let result: boolean = isLeftLessOrEqual(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(true);
    })

    test('Pair 7, ordered correctly', ()=> {
        let pairIndex: number = 6;

        let result: boolean = isLeftLessOrEqual(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(false);
    })

    test('Pair 8, ordered correctly', ()=> {
        let pairIndex: number = 7;

        let result: boolean = isLeftLessOrEqual(lists[pairIndex].left, lists[pairIndex].right);

        expect(result).toEqual(false);
    })
})