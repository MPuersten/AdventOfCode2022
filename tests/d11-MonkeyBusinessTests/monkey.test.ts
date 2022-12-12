import * as fs from 'fs'
import Monkey from "../../src/d11-MonkeyBusiness/monkey";
import MonkeyGroup from "../../src/d11-MonkeyBusiness/monkeyGroup";

describe('Monkey', () => {
    let monkey: Monkey;

    beforeEach(() => {
        let id: number = 0;
        let items: number[] = [1, 2, 3, 4, 5];
        let operator : string = '*';
        let operand: string = '5';
        let divisibleBy: number = 10;
        let trueMonkey: number = 1;
        let falseMonkey: number = 0;
        monkey = new Monkey(
            id, items, operator, operand, divisibleBy, trueMonkey, falseMonkey
        );
    })

    test('Throw item is undefined before inspecting', ()=> {
        let thrown: number[] = monkey.throwItem();
        expect(thrown[0]).toEqual(0);
        expect(thrown[1]).toEqual(undefined);
    })

    test('Throw item is multiplied after inspecting', ()=> {
        monkey.inspectNext(1);
        let thrown: number[] = monkey.throwItem();

        expect(thrown[0]).toEqual(0);
        expect(thrown[1]).toEqual(5);
    })

    test('Throw item goes to true monkey if divisible', ()=> {
        monkey.inspectNext(1);
        monkey.inspectNext(1);
        let thrown: number[] = monkey.throwItem();

        expect(thrown[0]).toEqual(1);
        expect(thrown[1]).toEqual(10);
    })

    test('Throw item is divided by the anxiety divider', ()=> {
        monkey.inspectNext(2);
        let thrown: number[] = monkey.throwItem();

        expect(thrown[0]).toEqual(0);
        expect(thrown[1]).toEqual(2);
    })

    test('Can give numbers', ()=> {
        let originalItemCount = monkey.itemCount;
        monkey.giveItem(20);

        expect(monkey.itemCount).toEqual(originalItemCount + 1);
    })
})