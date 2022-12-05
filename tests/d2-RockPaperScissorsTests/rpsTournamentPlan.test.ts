import * as fs from 'fs'
import RpsTrounamentPlan from '../../src/d2-RockPaperScissors/rpsTournamentPlan';

describe('Rock Paper Scissors Tournament', () => {
    test('Get Strategy Score', ()=> {
        let expectedScore: number = 11767
        
        let strategyText: string = fs.readFileSync('./assets/d2-input.txt', 'utf-8');

        let plan: RpsTrounamentPlan = new RpsTrounamentPlan(strategyText);

        expect(plan.getStrategyScore()).toEqual(expectedScore);
    })

    test('Get Selection Score', ()=> {
        let expectedScore: number = 13886;
        
        let strategyText: string = fs.readFileSync('./assets/d2-input.txt', 'utf-8');

        let plan: RpsTrounamentPlan = new RpsTrounamentPlan(strategyText);

        expect(plan.getSelectionScore()).toEqual(expectedScore);
    })
})