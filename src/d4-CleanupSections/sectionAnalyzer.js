"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyOverlap = exports.firstRangeContainsSecond = void 0;
function firstRangeContainsSecond(firstRange, secondRange) {
    return (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]);
}
exports.firstRangeContainsSecond = firstRangeContainsSecond;
function anyOverlap(firstRange, secondRange) {
    if (valueInRange(firstRange[0], secondRange))
        return true;
    if (valueInRange(firstRange[1], secondRange))
        return true;
    if (valueInRange(secondRange[0], firstRange))
        return true;
    if (valueInRange(secondRange[1], firstRange))
        return true;
    return false;
}
exports.anyOverlap = anyOverlap;
function valueInRange(value, range) {
    return (value >= range[0] && value <= range[1]);
}
