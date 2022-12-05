import RpsStrategyGame from "./rpsStrategyGame";
import RpsSelectionGame from "./rpsSelectionGame";

export default class RpsTrounamentPlan {
    private _rpsStrategyGames: RpsStrategyGame[] = [];
    private _rpsSelectionGames: RpsSelectionGame[] =[];
    private _strategyScore: number = 0;
    private _selectionScore: number = 0;
    
    constructor(strategyText: string) {
        let individualStrategies = strategyText.split(/\r?\n/);

        for (let i = 0; i < individualStrategies.length; i++) {
            this._rpsStrategyGames.push(new RpsStrategyGame(individualStrategies[i]));
            this._strategyScore += this._rpsStrategyGames[i].getScore();

            this._rpsSelectionGames.push(new RpsSelectionGame(individualStrategies[i]));
            this._selectionScore += this._rpsSelectionGames[i].getScore();
        }
    }

    public getStrategyScore(): number {
        return this._strategyScore;
    }

    public getSelectionScore(): number {
        return this._selectionScore
    }
}