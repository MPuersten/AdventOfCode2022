import RpsStrategyGame from "../src/rockPaperScissors/rpsStrategyGame";

describe('Rock Paper Scissors Game', () => {
    test('Get Win Score, with Paper', ()=> {
        let choices: string = 'A Y'
        let expectedScore: number = 8;
        let game: RpsStrategyGame = new RpsStrategyGame(choices)

        expect(game.getScore()).toEqual(expectedScore);
    })

    test('Get Loss Score, with Rock', ()=> {
        let choices: string = 'B X'
        let expectedScore: number = 1;
        let game: RpsStrategyGame = new RpsStrategyGame(choices)

        expect(game.getScore()).toEqual(expectedScore);
    })

    test('Get Draw Score, with Scissors', ()=> {
        let choices: string = 'C Z'
        let expectedScore: number = 6;
        let game: RpsStrategyGame = new RpsStrategyGame(choices)

        expect(game.getScore()).toEqual(expectedScore);
    })
})