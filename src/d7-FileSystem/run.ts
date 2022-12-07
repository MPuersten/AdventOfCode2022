import * as fs from 'fs'
import Directory from './directory';
import PuzzleFile from './puzzleFile';

let instructions: string[] = (fs.readFileSync('./assets/d7-input.txt', 'utf-8')).split(/\r?\n/);

let directories: Directory[] = [];
let currentDirectory: Directory = new Directory('/');
let topDirectory: Directory = currentDirectory;
directories.push(currentDirectory);

for (let i = 0; i < instructions.length; i++) {
    let instruction: string[] = instructions[i].split(' ');

    // console.log(instruction);

    // Command
    if (instruction[0] === '$') {
        // console.log('Cmd');

        // cd
        if (instruction[1] === 'cd') {
            // previous directory
            if (instruction[2] === '..') {
                // console.log("Moving to parent.");
                currentDirectory = currentDirectory.ParentDirectory;
                // console.log(currentDirectory.Name);
                // console.log("Children:");
                // console.log(currentDirectory.ChildDirectories);
            }
            // directory name
            else {
                // console.log("Moving to " + instruction[2]);
                // console.log("Looking through " + currentDirectory.ChildDirectories.length + " directories.");
                for (let i = 0; i < currentDirectory.ChildDirectories.length; i++){
                    // console.log("Looking for " + instruction[2] + " found " + currentDirectory.ChildDirectories[i].Name);
                    if (currentDirectory.ChildDirectories[i].Name === instruction[2]){
                        currentDirectory = currentDirectory.ChildDirectories[i];
                    }
                }
                
            }
        }
        // ls
        else { 
            // do nothing
        }
    }
    // Directory
    else if (instruction[0] === 'dir') {
        // console.log('Dir');
        
        let newDirectory: Directory = new Directory(instruction[1]);
        newDirectory.ParentDirectory = currentDirectory;

        currentDirectory.ChildDirectories.push(newDirectory);

        // console.log('Added new directory: ');
        // console.log(currentDirectory.ChildDirectories);
    }
    // File
    else {
        // console.log('File');
        currentDirectory.Files.push(new PuzzleFile(parseInt(instruction[0]), instruction[1]));
    }

    //if (i === 15) break;
}

let directoriesUnder: Directory[] = [];
function GetDirectoriesWithSizeUnder(sizeUnder: number, directory: Directory): void {
    // console.log("Called for " + directory.Name);
    for (let i = 0; i < directory.ChildDirectories.length; i++){
        GetDirectoriesWithSizeUnder(sizeUnder, directory.ChildDirectories[i]);
    }

    let directorySize: number = directory.getSumUnder();
    // console.log("Sum under " + directory.Name + " is " + directorySize);
    if (directorySize < sizeUnder) {
        // console.log("Pushing " + directory.Name);
        directoriesUnder.push(directory);
    }

}

GetDirectoriesWithSizeUnder(100000, topDirectory);
console.log("Num fitting folders: " + directoriesUnder.length);

let underSum: number = 0;
for (let i = 0; i < directoriesUnder.length; i++) {
    underSum += directoriesUnder[i].getSumUnder();
}

console.log("Under Sum: " + underSum);