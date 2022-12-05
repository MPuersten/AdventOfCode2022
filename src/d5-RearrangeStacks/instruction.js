"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instruction = /** @class */ (function () {
    function Instruction(instructionText) {
        var words = instructionText.split(' ');
        this._containersToMove = parseInt(words[1]);
        this._from = parseInt(words[3]);
        this._to = parseInt(words[5]);
    }
    Object.defineProperty(Instruction.prototype, "containersToMove", {
        get: function () {
            return this._containersToMove;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruction.prototype, "from", {
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruction.prototype, "to", {
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    Instruction.prototype.enact = function (stacks) {
        console.log(stacks);
        console.log(this._containersToMove);
        console.log(this._from);
        console.log(this._to);
        for (var i = 0; i < this._containersToMove; i++) {
            var container = stacks[this._from - 1].pop();
            if (container != undefined)
                stacks[this._to - 1].push(container);
            else
                throw Error("Bad contianer push/pop");
        }
        return stacks;
    };
    return Instruction;
}());
exports.default = Instruction;
