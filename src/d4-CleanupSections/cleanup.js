"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var sectionAnalyzer_1 = require("./sectionAnalyzer");
var cleanupText = fs.readFileSync('./assets/d4-input.txt', 'utf-8');
var cleanupGroups = cleanupText.split(/\r?\n/);
var overlapSum = 0;
var anyOverlapSum = 0;
for (var i = 0; i < cleanupGroups.length; i++) {
    if (cleanupGroups[i] === '')
        break;
    var assignments = cleanupGroups[i].split(',');
    var leftElf = assignments[0].split('-').map(function (item) {
        return parseInt(item);
    });
    var rightElf = assignments[1].split('-').map(function (item) {
        return parseInt(item);
    });
    if ((0, sectionAnalyzer_1.firstRangeContainsSecond)(leftElf, rightElf) || (0, sectionAnalyzer_1.firstRangeContainsSecond)(rightElf, leftElf)) {
        overlapSum++;
    }
    if ((0, sectionAnalyzer_1.anyOverlap)(leftElf, rightElf)) {
        anyOverlapSum++;
    }
}
console.log('Overlap sum: ' + overlapSum);
console.log('Any overlap Sum: ' + anyOverlapSum);
