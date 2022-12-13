import Directory from "./directory";

export function GetDirectoriesWithMaxSize(maxSize: number, directory: Directory): Directory[] {
    let directoriesUnder: Directory[] = [];

    for (let i = 0; i < directory.ChildDirectories.length; i++){
        directoriesUnder = directoriesUnder.concat(GetDirectoriesWithMaxSize(maxSize, directory.ChildDirectories[i]));
    }

    if (directory.getSumUnder() <= maxSize) {
        directoriesUnder.push(directory);
    }

    return directoriesUnder;
}

export function GetDirectoriesWithMinSize(minSize: number, directory: Directory): Directory[] {
    let directoriesOver: Directory[] = [];

    for (let i = 0; i < directory.ChildDirectories.length; i++){
        directoriesOver = directoriesOver.concat(GetDirectoriesWithMinSize(minSize, directory.ChildDirectories[i]));
    }

    if (directory.getSumUnder() >= minSize) {
        directoriesOver.push(directory);
    }

    return directoriesOver;
}