"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var directory_1 = require("./directory");
var puzzleFile_1 = require("./puzzleFile");
var instructions = (fs.readFileSync('./assets/d7-input.txt', 'utf-8')).split(/\r?\n/);
var directories = [];
var currentDirectory = new directory_1.default('/');
var topDirectory = currentDirectory;
directories.push(currentDirectory);
for (var i = 0; i < instructions.length; i++) {
    var instruction = instructions[i].split(' ');
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
                for (var i_1 = 0; i_1 < currentDirectory.ChildDirectories.length; i_1++) {
                    // console.log("Looking for " + instruction[2] + " found " + currentDirectory.ChildDirectories[i].Name);
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
        // console.log('Dir');
        var newDirectory = new directory_1.default(instruction[1]);
        newDirectory.ParentDirectory = currentDirectory;
        currentDirectory.ChildDirectories.push(newDirectory);
        // console.log('Added new directory: ');
        // console.log(currentDirectory.ChildDirectories);
    }
    // File
    else {
        // console.log('File');
        currentDirectory.Files.push(new puzzleFile_1.default(parseInt(instruction[0]), instruction[1]));
    }
    //if (i === 15) break;
}
var directoriesUnder = [];
function GetDirectoriesWithSizeUnder(sizeUnder, directory) {
    // console.log("Called for " + directory.Name);
    for (var i = 0; i < directory.ChildDirectories.length; i++) {
        GetDirectoriesWithSizeUnder(sizeUnder, directory.ChildDirectories[i]);
    }
    var directorySize = directory.getSumUnder();
    // console.log("Sum under " + directory.Name + " is " + directorySize);
    if (directorySize < sizeUnder) {
        // console.log("Pushing " + directory.Name);
        directoriesUnder.push(directory);
    }
}
GetDirectoriesWithSizeUnder(100000, topDirectory);
console.log("Num fitting folders: " + directoriesUnder.length);
var underSum = 0;
for (var i = 0; i < directoriesUnder.length; i++) {
    underSum += directoriesUnder[i].getSumUnder();
}
console.log("Under Sum: " + underSum);
