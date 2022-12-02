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
    ElfCollection.prototype.getHighestCalorieTotal = function (numElvesInGrouping) {
        var highestCalorieElves = [];
        highestCalorieElves.push(this._elves[0]);
        var lowestCountInTotal = this._elves[0].calorieCount;
        var lowestCountInTotalIndex = 0;
        for (var i = 1; i < numElvesInGrouping; i++) {
            highestCalorieElves.push(this._elves[i]);
            if (this._elves[i].calorieCount < lowestCountInTotal) {
                lowestCountInTotal = this._elves[i].calorieCount;
                lowestCountInTotalIndex = i;
            }
        }
        for (var i = numElvesInGrouping; i < this._elves.length; i++) {
            if (this._elves[i].calorieCount > lowestCountInTotal) {
                highestCalorieElves[lowestCountInTotalIndex] = this._elves[i];
                lowestCountInTotal = highestCalorieElves[0].calorieCount;
                lowestCountInTotalIndex = 0;
                for (var j = 1; j < numElvesInGrouping; j++) {
                    if (highestCalorieElves[j].calorieCount < lowestCountInTotal) {
                        lowestCountInTotal = highestCalorieElves[j].calorieCount;
                        lowestCountInTotalIndex = j;
                    }
                }
            }
        }
        var total = 0;
        for (var i = 0; i < numElvesInGrouping; i++) {
            total += highestCalorieElves[i].calorieCount;
        }
        return total;
    };
    return ElfCollection;
}());
exports.default = ElfCollection;
