import * as fs from 'fs'
import MonkeyGroup from '../../src/d11-MonkeyBusiness/monkeyGroup';


describe('Monkey Group', () => {
    let monkeys: MonkeyGroup;
    
    beforeEach(() => {
        let monkeyText: string[] = (fs.readFileSync('./assets/d11/d11-sample.txt', 'utf-8')).split(/\r?\n/);
        monkeys = new MonkeyGroup(monkeyText);
    })
    
    test('Test 5 rounds with anxiety divider at 3', ()=> {
        let expectedCounts: number[] = [ 26, 24, 22, 4 ]
        
        monkeys.analyzeMonkeys(5, 3);

        let inspectionCounts: number[] = monkeys.getInspectionCounts();
        inspectionCounts.sort((a, b) => b - a);

        console.log(inspectionCounts);

        for (let i = 0; i < expectedCounts.length; i++) {
            expect(inspectionCounts[i]).toEqual(expectedCounts[i]);
        }
    })

    test('Test 20 rounds with anxiety divider at 3', ()=> {
        let expectedCounts: number[] = [ 105, 101, 95, 7 ]
        
        monkeys.analyzeMonkeys(20, 3);

        let inspectionCounts: number[] = monkeys.getInspectionCounts();
        inspectionCounts.sort((a, b) => b - a);

        console.log(inspectionCounts);

        for (let i = 0; i < expectedCounts.length; i++) {
            expect(inspectionCounts[i]).toEqual(expectedCounts[i]);
        }
    })

    test('Test 10 rounds with anxiety divider at 1', ()=> {
        let expectedCounts: number[] = [ 50, 50, 46, 4 ]
        
        monkeys.analyzeMonkeys(10, 1);

        let inspectionCounts: number[] = monkeys.getInspectionCounts();
        inspectionCounts.sort((a, b) => b - a);

        console.log(inspectionCounts);

        for (let i = 0; i < expectedCounts.length; i++) {
            expect(inspectionCounts[i]).toEqual(expectedCounts[i]);
        }
    })
})