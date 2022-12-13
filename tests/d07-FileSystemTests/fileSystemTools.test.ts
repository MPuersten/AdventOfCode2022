import Directory from "../../src/d07-FileSystem/directory"
import { GetDirectoriesWithMaxSize, GetDirectoriesWithMinSize } from "../../src/d07-FileSystem/fileSystemTools";
import PuzzleFile from "../../src/d07-FileSystem/puzzleFile";

describe('File System Tools', () => {
    let d1: Directory;
    let d2: Directory;
    let d3: Directory;
    let d4: Directory;

    beforeEach(() => {
        d1 = new Directory('d1');
        d2 = new Directory('d2');
        d3 = new Directory('d3');
        d4 = new Directory('d4');

        d1.Files.push(new PuzzleFile(1, 'a'));
        d2.Files.push(new PuzzleFile(2, 'b'));
        d3.Files.push(new PuzzleFile(2, 'c'));
        d4.Files.push(new PuzzleFile(3, 'd'));
        d4.Files.push(new PuzzleFile(4, 'e'));
        d4.Files.push(new PuzzleFile(5, 'f'));

        d1.ChildDirectories.push(d2);
        d1.ChildDirectories.push(d3);
        d2.ChildDirectories.push(d4);
    })

    test('Get directories of a max size', ()=> {
        let expectedNumDirectories = 1;
        let maxSize: number = 2;

        let directories: Directory[] = GetDirectoriesWithMaxSize(maxSize, d1);

        expect(directories.length).toEqual(expectedNumDirectories);
    })

    test('Get directories of a max size, none found', ()=> {
        let expectedNumDirectories = 0;
        let maxSize: number = 1;

        let directories: Directory[] = GetDirectoriesWithMaxSize(maxSize, d1);

        expect(directories.length).toEqual(expectedNumDirectories);
    })

    test('Get directories of a max size, all found', ()=> {
        let expectedNumDirectories = 4;
        let maxSize: number = 18;

        let directories: Directory[] = GetDirectoriesWithMaxSize(maxSize, d1);

        expect(directories.length).toEqual(expectedNumDirectories);
    })

    test('Get directories of a min size', ()=> {
        let expectedNumDirectories = 3;
        let minSize: number = 12;

        let directories: Directory[] = GetDirectoriesWithMinSize(minSize, d1);

        expect(directories.length).toEqual(expectedNumDirectories);
    })

    test('Get directories of a min size, all found', ()=> {
        let expectedNumDirectories = 4;
        let minSize: number = 1;

        let directories: Directory[] = GetDirectoriesWithMinSize(minSize, d1);

        expect(directories.length).toEqual(expectedNumDirectories);
    })

    test('Get directories of a min size, none found', ()=> {
        let expectedNumDirectories = 0;
        let minSize: number = 18;

        let directories: Directory[] = GetDirectoriesWithMinSize(minSize, d1);

        expect(directories.length).toEqual(expectedNumDirectories);
    })
})