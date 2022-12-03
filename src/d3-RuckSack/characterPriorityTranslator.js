"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacterPriority = void 0;
function getCharacterPriority(character) {
    var minPriority = 1;
    var maxPriority = 52;
    var priority;
    priority = character.charCodeAt(0);
    if (isUppercase(character)) {
        var upperCaseShift = 38;
        priority -= upperCaseShift;
    }
    else /*lowercase*/ {
        var lowerCaseShift = 96;
        priority -= lowerCaseShift;
    }
    if (priority < minPriority || priority > maxPriority) {
        throw Error("Invalid character (${priority}), must be 1-52");
    }
    return priority;
}
exports.getCharacterPriority = getCharacterPriority;
function isUppercase(character) {
    return (character == character.toUpperCase());
}
