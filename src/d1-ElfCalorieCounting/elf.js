"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Elf = /** @class */ (function () {
    function Elf(snacks) {
        this._calorieCount = 0;
        for (var i = 0; i < snacks.length; i++) {
            this._calorieCount += snacks[i];
        }
    }
    Object.defineProperty(Elf.prototype, "calorieCount", {
        get: function () {
            return this._calorieCount;
        },
        enumerable: false,
        configurable: true
    });
    return Elf;
}());
exports.default = Elf;
