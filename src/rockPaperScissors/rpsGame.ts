export default class RpsGame {
    private _score: number = 0;
    
    constructor(choices: string) {
        let choiceList = choices.split(' ');
        this._score += this.getChoiceScore(choiceList[1]);
        this._score += this.getResultScore(choiceList[0], choiceList[1])
    }

    public getScore(): number {
        return this._score;
    }

    private getChoiceScore(choice: string): number{
        let score: number;
        if (choice === 'X') score = 1;
        else if (choice === 'Y') score = 2;
        else if (choice === 'Z') score = 3;
        else {
            score = 0;
        }

        return score;
    }

    private getResultScore(theirChoice: string, myChoice: string): number{
        let score: number;
        
        if (theirChoice === 'A') {
            if (myChoice === 'X') score = 3;
            else if (myChoice === 'Y') score = 6;
            else if (myChoice === 'Z') score = 0;
            else score = 0;
        }
        else if (theirChoice === 'B') {
            if (myChoice === 'X') score = 0;
            else if (myChoice === 'Y') score = 3;
            else if (myChoice === 'Z') score = 6;
            else score = 0;
        }
        else {
            if (myChoice === 'X') score = 6;
            else if (myChoice === 'Y') score = 0;
            else if (myChoice === 'Z') score = 3;
            else score = 0;
        }

        return score;
    }
}