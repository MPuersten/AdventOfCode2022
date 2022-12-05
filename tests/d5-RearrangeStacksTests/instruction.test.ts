import Instruction from "../../src/d5-RearrangeStacks/instruction";

describe('Instruction', () => {
    test('Can construct with text and read containers to move', ()=> {
        let expectedStartValue: number = 8;
        
        let text: string = "move 8 from 3 to 2"
        let instruction: Instruction = new Instruction(text);

        expect(instruction.containersToMove).toEqual(expectedStartValue);
    })
})