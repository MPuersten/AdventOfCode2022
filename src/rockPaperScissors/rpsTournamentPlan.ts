import RpsGame from "./rpsGame";

export default class RpsTrounamentPlan {
    private _rpsGames: RpsGame[] = [];
    private _score: number = 0;
    
    constructor(strategyText: string) {
        let individualStrategies = strategyText.split(/\r?\n/);

        for (let i = 0; i < individualStrategies.length; i++) {
            this._rpsGames.push(new RpsGame(individualStrategies[i]));
            this._score += this._rpsGames[i].getScore();
        }
    }

    public getTotalScore(): number {
        return this._score;
    }
}