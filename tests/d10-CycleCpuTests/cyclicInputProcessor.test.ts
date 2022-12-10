import * as fs from 'fs'
import CyclicInputProcessor from '../../src/d10-CycleCpu/cyclicInputProcessor';

describe('Cyclic Input Processor', () => {
    let instructions: string[];
    
    beforeEach(() => {
        instructions = (fs.readFileSync('./assets/d10-input.txt', 'utf-8')).split(/\r?\n/);
    })

    test('20th cycle of sample', ()=> {
        let expectedValue: number = 420;

        let processor: CyclicInputProcessor = new CyclicInputProcessor(instructions);
        processor.execute(19);

        expect(processor.signalStrength).toEqual(expectedValue);
    })
})