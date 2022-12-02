import Elf from '../src/elf';
import SnackContainer from '../src/interfaces/snackContainer'

describe('Elf tests', () => {
    test('Elf can provide calorie count from injected snacks.', ()=> {
        let expectedCalorieCount = 6;
        let snacks: number[] = [1, 2, 3];

        let elf : SnackContainer = new Elf(snacks);

        expect(elf.calorieCount).toEqual(expectedCalorieCount);
    })
})