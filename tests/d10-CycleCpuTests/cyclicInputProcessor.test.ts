import * as fs from 'fs'
import CyclicInputProcessor from '../../src/d10-CycleCpu/cyclicInputProcessor';

describe('Cyclic Input Processor', () => {
    let instructions: string[];
    
    beforeEach(() => {
        instructions = (fs.readFileSync('./assets/d10/d10-sample.txt', 'utf-8')).split(/\r?\n/);
    })

    test('20th cycle of sample', ()=> {
        let expectedValue: number = 420;

        let processor: CyclicInputProcessor = new CyclicInputProcessor(instructions);
        processor.execute(20);

        expect(processor.signalStrength).toEqual(expectedValue);
    })

    test('60th cycle of sample', ()=> {
        let expectedValue: number = 1140;

        let processor: CyclicInputProcessor = new CyclicInputProcessor(instructions);
        processor.execute(60);

        expect(processor.signalStrength).toEqual(expectedValue);
    })

    test('100th cycle of sample', ()=> {
        let expectedValue: number = 1800;

        let processor: CyclicInputProcessor = new CyclicInputProcessor(instructions);
        processor.execute(100);

        expect(processor.signalStrength).toEqual(expectedValue);
    })

    test('140th cycle of sample', ()=> {
        let expectedValue: number = 2940;

        let processor: CyclicInputProcessor = new CyclicInputProcessor(instructions);
        processor.execute(140);

        expect(processor.signalStrength).toEqual(expectedValue);
    })

    test('180th cycle of sample', ()=> {
        let expectedValue: number = 2880;

        let processor: CyclicInputProcessor = new CyclicInputProcessor(instructions);
        processor.execute(180);

        expect(processor.signalStrength).toEqual(expectedValue);
    })

    test('220th cycle of sample', ()=> {
        let expectedValue: number = 3960;

        let processor: CyclicInputProcessor = new CyclicInputProcessor(instructions);
        processor.execute(220);

        expect(processor.signalStrength).toEqual(expectedValue);
    })
})