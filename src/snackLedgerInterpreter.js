"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SnackLedgerInterpreter = /** @class */ (function () {
    function SnackLedgerInterpreter() {
    }
    SnackLedgerInterpreter.prototype.getCalorieLists = function (snackLedger) {
        var currentList = 0;
        var calorieLists = [];
        calorieLists.push([]);
        var snackList = snackLedger.split(/\r?\n/);
        for (var i = 0; i < snackList.length; i++) {
            if (snackList[i] === '') {
                calorieLists.push([]);
                currentList++;
            }
            else {
                calorieLists[currentList].push(parseInt(snackList[i]));
            }
        }
        return calorieLists;
    };
    return SnackLedgerInterpreter;
}());
exports.default = SnackLedgerInterpreter;
