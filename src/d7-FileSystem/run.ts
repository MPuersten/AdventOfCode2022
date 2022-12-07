import * as fs from 'fs'
import Directory from './directory';
import PuzzleFile from './puzzleFile';

let instructions: string[] = (fs.readFileSync('./assets/d7-input.txt', 'utf-8')).split(/\r?\n/);

let directories: Directory[] = [];
let currentDirectory: Directory = new Directory('/');
let topDirectory: Directory = currentDirectory;
directories.push(currentDirectory);

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

let directoriesOver: Directory[] = [];
function GetDirectoriesWithSizeOver(sizeUnder: number, directory: Directory): void {
    // console.log("Called for " + directory.Name);
    for (let i = 0; i < directory.ChildDirectories.length; i++){
        GetDirectoriesWithSizeOver(sizeUnder, directory.ChildDirectories[i]);
    }

    let directorySize: number = directory.getSumUnder();
    // console.log("Sum under " + directory.Name + " is " + directorySize);
    if (directorySize > sizeUnder) {
        // console.log("Pushing " + directory.Name);
        directoriesOver.push(directory);
    }
}

for (let i = 0; i < instructions.length; i++) {
    let instruction: string[] = instructions[i].split(' ');

    // Command
    if (instruction[0] === '$') {
        // console.log('Cmd');

        // cd
        if (instruction[1] === 'cd') {
            // previous directory
            if (instruction[2] === '..') {
                currentDirectory = currentDirectory.ParentDirectory;
            }
            // directory name
            else {
                for (let i = 0; i < currentDirectory.ChildDirectories.length; i++){
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
        let newDirectory: Directory = new Directory(instruction[1]);
        newDirectory.ParentDirectory = currentDirectory;

        currentDirectory.ChildDirectories.push(newDirectory);
    }
    // File
    else {
        currentDirectory.Files.push(new PuzzleFile(parseInt(instruction[0]), instruction[1]));
    }
}

// Question 1
GetDirectoriesWithSizeUnder(100000, topDirectory);

let underSum: number = 0;
for (let i = 0; i < directoriesUnder.length; i++) {
    underSum += directoriesUnder[i].getSumUnder();
}

console.log("Under sum: " + underSum);

// Question 2
let usedSpace: number = topDirectory.getSumUnder();
console.log("Used Space: " + usedSpace);

let minSpaceToFreeUp: number = usedSpace - 40000000;
console.log("Space to free: " + minSpaceToFreeUp);

GetDirectoriesWithSizeOver(minSpaceToFreeUp, topDirectory);

let smallestDirectorySize: number = 70000000;
for (let i = 0; i < directoriesOver.length; i++) {
    let directorySize: number = directoriesOver[i].getSumUnder()

    if (directorySize < smallestDirectorySize) {
        smallestDirectorySize = directorySize;
    }
}

console.log("Total size of Directory to delete: " + smallestDirectorySize);