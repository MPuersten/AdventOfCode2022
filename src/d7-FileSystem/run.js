"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var directory_1 = require("./directory");
var puzzleFile_1 = require("./puzzleFile");
var fileSystemTools_1 = require("./fileSystemTools");
var instructions = (fs.readFileSync('./assets/d7-input.txt', 'utf-8')).split(/\r?\n/);
var directories = [];
var currentDirectory = new directory_1.default('/');
var topDirectory = currentDirectory;
directories.push(currentDirectory);
for (var i = 0; i < instructions.length; i++) {
    var instruction = instructions[i].split(' ');
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
                for (var i_1 = 0; i_1 < currentDirectory.ChildDirectories.length; i_1++) {
                    if (currentDirectory.ChildDirectories[i_1].Name === instruction[2]) {
                        currentDirectory = currentDirectory.ChildDirectories[i_1];
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
        var newDirectory = new directory_1.default(instruction[1]);
        newDirectory.ParentDirectory = currentDirectory;
        currentDirectory.ChildDirectories.push(newDirectory);
    }
    // File
    else {
        currentDirectory.Files.push(new puzzleFile_1.default(parseInt(instruction[0]), instruction[1]));
    }
}
// Question 1
var directoriesUnder = (0, fileSystemTools_1.GetDirectoriesWithMaxSize)(100000, topDirectory);
var underSum = 0;
for (var i = 0; i < directoriesUnder.length; i++) {
    underSum += directoriesUnder[i].getSumUnder();
}
console.log("Under sum: " + underSum);
// Question 2
var usedSpace = topDirectory.getSumUnder();
console.log("Used Space: " + usedSpace);
var minSpaceToFreeUp = usedSpace - 40000000;
console.log("Space to free: " + minSpaceToFreeUp);
var directoriesOver = (0, fileSystemTools_1.GetDirectoriesWithMinSize)(minSpaceToFreeUp, topDirectory);
var smallestDirectorySize = 70000000;
for (var i = 0; i < directoriesOver.length; i++) {
    var directorySize = directoriesOver[i].getSumUnder();
    if (directorySize < smallestDirectorySize) {
        smallestDirectorySize = directorySize;
    }
}
console.log("Total size of Directory to delete: " + smallestDirectorySize);
