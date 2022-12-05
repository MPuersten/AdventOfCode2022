"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rpsStrategyGame_1 = require("./rpsStrategyGame");
var rpsSelectionGame_1 = require("./rpsSelectionGame");
var RpsTrounamentPlan = /** @class */ (function () {
    function RpsTrounamentPlan(strategyText) {
        this._rpsStrategyGames = [];
        this._rpsSelectionGames = [];
        this._strategyScore = 0;
        this._selectionScore = 0;
        var individualStrategies = strategyText.split(/\r?\n/);
        for (var i = 0; i < individualStrategies.length; i++) {
            this._rpsStrategyGames.push(new rpsStrategyGame_1.default(individualStrategies[i]));
            this._strategyScore += this._rpsStrategyGames[i].getScore();
            this._rpsSelectionGames.push(new rpsSelectionGame_1.default(individualStrategies[i]));
            this._selectionScore += this._rpsSelectionGames[i].getScore();
        }
    }
    RpsTrounamentPlan.prototype.getStrategyScore = function () {
        return this._strategyScore;
    };
    RpsTrounamentPlan.prototype.getSelectionScore = function () {
        return this._selectionScore;
    };
    return RpsTrounamentPlan;
}());
exports.default = RpsTrounamentPlan;
