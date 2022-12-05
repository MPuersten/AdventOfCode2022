"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyOverlap = exports.firstRangeContainsSecond = void 0;
function firstRangeContainsSecond(firstRange, secondRange) {
    return (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]);
}
exports.firstRangeContainsSecond = firstRangeContainsSecond;
function anyOverlap(firstRange, secondRange) {
    return (firstRange[0] <= secondRange[1] && secondRange[0] <= firstRange[1]);
}
exports.anyOverlap = anyOverlap;
function isValueInRange(value, range) {
    return (value >= range[0] && value <= range[1]);
}
