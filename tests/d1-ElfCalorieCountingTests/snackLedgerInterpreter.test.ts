import SnackLedgerInterpreter from "../../src/d1-ElfCalorieCounting/snackLedgerInterpreter";

describe('Snack Ledger Interpreter', () => {
    test('Correct calorie list returned', ()=> {
        let expectedLength = 3;
        let expectedFirstListLength = 2;
        let expectedLastValue = 3;

        let snackLedger: string = '1\n2\n\n1\n\n3'
        let interpreter: SnackLedgerInterpreter = new SnackLedgerInterpreter();
        
        let calorieList: number[][] = interpreter.getCalorieLists(snackLedger);
        
        expect(calorieList.length).toEqual(expectedLength);
        expect(calorieList[0].length).toEqual(expectedFirstListLength);
        expect(calorieList[2][0]).toEqual(expectedLastValue);
    })
})