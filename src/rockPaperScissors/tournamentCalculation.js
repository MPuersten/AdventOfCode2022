"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var rpsTournamentPlan_1 = require("./rpsTournamentPlan");
var strategyText = fs.readFileSync('../assets/d2-input.txt', 'utf-8');
var plan = new rpsTournamentPlan_1.default(strategyText);
console.log(plan.getStrategyScore());
console.log(plan.getSelectionScore());
