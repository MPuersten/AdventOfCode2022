"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var initialStacks_1 = require("./initialStacks");
var instruction_1 = require("./instruction");
function rearrangeStacks(stacks, instructions) {
    for (var i = 0; i < instructions.length; i++) {
        console.log(i);
        stacks = instructions[i].enact(stacks);
    }
    return stacks;
}
var instructionText = fs.readFileSync('./assets/d5/d5-instructions.txt', 'utf-8');
var individualInstructionTest = instructionText.split(/\r?\n/);
var instructions = [];
for (var i = 0; i < individualInstructionTest.length; i++) {
    instructions.push(new instruction_1.default(individualInstructionTest[i]));
}
var stacks = initialStacks_1.STACKS;
stacks = rearrangeStacks(stacks, instructions);
var topStacks = '';
for (var i = 0; i < stacks.length; i++) {
    topStacks += stacks[i][stacks[i].length - 1];
}
console.log(topStacks);
