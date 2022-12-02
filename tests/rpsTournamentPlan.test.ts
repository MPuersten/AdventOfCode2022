import * as fs from 'fs'
import RpsGame from "../src/rockPaperScissors/rpsGame";
import RpsTrounamentPlan from '../src/rockPaperScissors/rpsTournamentPlan';

describe('Rock Paper Scissors Tournament', () => {
    test('Get Win Score, with Paper', ()=> {
        let strategyText: string = fs.readFileSync('../assets/d2-input.txt', 'utf-8');

        let plan: RpsTrounamentPlan = new RpsTrounamentPlan(strategyText);

        expect(plan.getTotalScore()).toEqual(0);
    })
})