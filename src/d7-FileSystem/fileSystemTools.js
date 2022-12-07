"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDirectoriesWithMinSize = exports.GetDirectoriesWithMaxSize = void 0;
function GetDirectoriesWithMaxSize(maxSize, directory) {
    var directoriesUnder = [];
    for (var i = 0; i < directory.ChildDirectories.length; i++) {
        directoriesUnder = directoriesUnder.concat(GetDirectoriesWithMaxSize(maxSize, directory.ChildDirectories[i]));
    }
    if (directory.getSumUnder() <= maxSize) {
        directoriesUnder.push(directory);
    }
    return directoriesUnder;
}
exports.GetDirectoriesWithMaxSize = GetDirectoriesWithMaxSize;
function GetDirectoriesWithMinSize(minSize, directory) {
    var directoriesOver = [];
    for (var i = 0; i < directory.ChildDirectories.length; i++) {
        directoriesOver = directoriesOver.concat(GetDirectoriesWithMinSize(minSize, directory.ChildDirectories[i]));
    }
    if (directory.getSumUnder() >= minSize) {
        directoriesOver.push(directory);
    }
    return directoriesOver;
}
exports.GetDirectoriesWithMinSize = GetDirectoriesWithMinSize;
