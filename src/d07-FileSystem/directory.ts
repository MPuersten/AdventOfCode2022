import PuzzleFile from "./puzzleFile";

export default class Directory {
    Name: string;

    ChildDirectories: Directory[] = [];
    ParentDirectory?: Directory;
    Files: PuzzleFile[] = [];
    
    constructor(name: string) {
        this.Name = name;
    }

    getSumUnder(): number {
        let sum: number = 0;

        for (let i = 0; i < this.ChildDirectories.length; i++) {
            sum += this.ChildDirectories[i].getSumUnder();
        }

        for (let i = 0; i < this.Files.length; i++) {
            sum += this.Files[i].Size;
        }

        return sum;
    }
}