import * as fs from 'fs'
import RpsTrounamentPlan from './rpsTournamentPlan';

let strategyText: string = fs.readFileSync('./assets/d2-input.txt', 'utf-8');
let plan: RpsTrounamentPlan = new RpsTrounamentPlan(strategyText);

console.log("Before the Elf finishes(XYZ is action to pick): " + plan.getStrategyScore());
console.log("After the Elf finishes(XYZ is loss/draw/win): " + plan.getSelectionScore());