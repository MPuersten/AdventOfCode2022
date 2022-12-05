import Instruction from "../../src/d5-RearrangeStacks/instruction";

describe('Instruction', () => {
    test('Can construct with text and read containers to move', ()=> {
        let containersToMove: number = 8;
        
        let text: string = "move 8 from 3 to 2"
        let instruction: Instruction = new Instruction(text);

        expect(instruction.containersToMove).toEqual(containersToMove);
    })

    test('Can construct with text and read containers to move', ()=> {
        let from: number = 3;
        
        let text: string = "move 8 from 3 to 2"
        let instruction: Instruction = new Instruction(text);

        expect(instruction.from).toEqual(from);
    })

    test('Can construct with text and read containers to move', ()=> {
        let to: number = 2;
        
        let text: string = "move 8 from 3 to 2"
        let instruction: Instruction = new Instruction(text);

        expect(instruction.to).toEqual(to);
    })
})