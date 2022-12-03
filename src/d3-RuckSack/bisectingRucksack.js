"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BisectingRucksack = /** @class */ (function () {
    function BisectingRucksack(items) {
        var firstHalf = items.substring(0, items.length / 2);
        var secondHalf = items.substring(items.length / 2, items.length);
        for (var i = 0; i < firstHalf.length; i++) {
            var result = secondHalf.indexOf(firstHalf[i]);
            if (result !== -1) {
                this._repeatedCharacter = firstHalf[i];
                break;
            }
        }
    }
    Object.defineProperty(BisectingRucksack.prototype, "repeatedCharacter", {
        get: function () {
            return this._repeatedCharacter;
        },
        enumerable: false,
        configurable: true
    });
    return BisectingRucksack;
}());
exports.default = BisectingRucksack;
