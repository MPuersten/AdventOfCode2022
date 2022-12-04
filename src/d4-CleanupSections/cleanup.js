"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var cleanupText = fs.readFileSync('./assets/d4-input.txt', 'utf-8');
console.log(cleanupText);
