import Directory from "../../src/d07-FileSystem/directory"
import PuzzleFile from "../../src/d07-FileSystem/puzzleFile";

describe('Directory', () => {
    test('Sum under is correct', ()=> {
        let expectedSum: number = 17;
        
        let d1: Directory = new Directory('d1');
        let d2: Directory = new Directory('d2');
        let d3: Directory = new Directory('d3');
        let d4: Directory = new Directory('d4');

        d1.Files.push(new PuzzleFile(1, 'a'));
        d2.Files.push(new PuzzleFile(2, 'b'));
        d3.Files.push(new PuzzleFile(2, 'c'));
        d4.Files.push(new PuzzleFile(3, 'd'));
        d4.Files.push(new PuzzleFile(4, 'e'));
        d4.Files.push(new PuzzleFile(5, 'f'));

        d1.ChildDirectories.push(d2);
        d1.ChildDirectories.push(d3);
        d2.ChildDirectories.push(d4);

        expect(d1.getSumUnder()).toEqual(expectedSum);
    })
})