"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElfCollection = /** @class */ (function () {
    function ElfCollection(elves) {
        this._elves = [];
        this._elves = elves;
    }
    Object.defineProperty(ElfCollection.prototype, "length", {
        get: function () {
            return this._elves.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElfCollection.prototype, "mostCaloriesInSingleElf", {
        get: function () {
            var highestCalorieElf = 0;
            var highestCalories = 0;
            for (var i = 0; i < this._elves.length; i++) {
                if (this._elves[i].calorieCount > highestCalories) {
                    highestCalorieElf = i + 1;
                    highestCalories = this._elves[i].calorieCount;
                }
            }
            return highestCalories;
        },
        enumerable: false,
        configurable: true
    });
    return ElfCollection;
}());
exports.default = ElfCollection;
