"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directory = /** @class */ (function () {
    function Directory(name) {
        this.ChildDirectories = [];
        this.Files = [];
        this.Name = name;
    }
    Directory.prototype.getSumUnder = function () {
        var sum = 0;
        for (var i = 0; i < this.ChildDirectories.length; i++) {
            sum += this.ChildDirectories[i].getSumUnder();
        }
        for (var i = 0; i < this.Files.length; i++) {
            sum += this.Files[i].Size;
        }
        return sum;
    };
    return Directory;
}());
exports.default = Directory;
