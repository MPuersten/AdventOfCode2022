import Elf from '../../src/d1-ElfCalorieCounting/elf';
import SnackContainer from '../../src/d1-ElfCalorieCounting/interfaces/snackContainer'

describe('Elf tests', () => {
    test('Elf can provide calorie count from injected snacks.', ()=> {
        let expectedCalorieCount = 6;
        let snacks: number[] = [1, 2, 3];

        let elf : SnackContainer = new Elf(snacks);

        expect(elf.calorieCount).toEqual(expectedCalorieCount);
    })
})