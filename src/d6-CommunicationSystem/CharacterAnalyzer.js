"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindNumCharsBeforeStringIsUnique = void 0;
function FindNumCharsBeforeStringIsUnique(input, windowSize) {
    if (windowSize <= 1)
        return 1;
    var slidingWindow = [];
    for (var i = 0; i < windowSize; i++) {
        slidingWindow.push(input[i]);
    }
    if (isUnique(slidingWindow))
        return slidingWindow.length;
    var characterCounter = windowSize;
    for (var i = windowSize; i < input.length; i++) {
        characterCounter++;
        slidingWindow.shift();
        slidingWindow.push(input[i]);
        if (isUnique(slidingWindow))
            break;
    }
    return characterCounter;
}
exports.FindNumCharsBeforeStringIsUnique = FindNumCharsBeforeStringIsUnique;
function isUnique(input) {
    for (var i = 0; i < input.length; i++) {
        if (input.indexOf(input[i]) !== i) {
            return false;
        }
    }
    return true;
}
