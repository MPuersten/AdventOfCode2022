"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RpsGame = /** @class */ (function () {
    function RpsGame(choices) {
        this._score = 0;
        var choiceList = choices.split(' ');
        this._score += this.getChoiceScore(choiceList[1]);
        this._score += this.getResultScore(choiceList[0], choiceList[1]);
    }
    RpsGame.prototype.getScore = function () {
        return this._score;
    };
    RpsGame.prototype.getChoiceScore = function (choice) {
        var score;
        if (choice === 'X')
            score = 0;
        else if (choice === 'Y')
            score = 3;
        else if (choice === 'Z')
            score = 6;
        else {
            score = 0;
        }
        return score;
    };
    RpsGame.prototype.getResultScore = function (theirChoice, myChoice) {
        var score;
        if (theirChoice === 'A') {
            if (myChoice === 'X')
                score = 3;
            else if (myChoice === 'Y')
                score = 1;
            else if (myChoice === 'Z')
                score = 2;
            else
                score = 0;
        }
        else if (theirChoice === 'B') {
            if (myChoice === 'X')
                score = 1;
            else if (myChoice === 'Y')
                score = 2;
            else if (myChoice === 'Z')
                score = 3;
            else
                score = 0;
        }
        else {
            if (myChoice === 'X')
                score = 2;
            else if (myChoice === 'Y')
                score = 3;
            else if (myChoice === 'Z')
                score = 1;
            else
                score = 0;
        }
        return score;
    };
    return RpsGame;
}());
exports.default = RpsGame;
