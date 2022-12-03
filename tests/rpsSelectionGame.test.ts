import RpsSelectionGame from "../src/D2-RockPaperScissors/rpsSelectionGame";

describe('Rock Paper Scissors Game', () => {
    test('Need draw, pick Rock', ()=> {
        let choices: string = 'A Y'
        let expectedScore: number = 4;
        let game: RpsSelectionGame = new RpsSelectionGame(choices)

        expect(game.getScore()).toEqual(expectedScore);
    })

    test('Need loss, pick Rock', ()=> {
        let choices: string = 'B X'
        let expectedScore: number = 1;
        let game: RpsSelectionGame = new RpsSelectionGame(choices)

        expect(game.getScore()).toEqual(expectedScore);
    })

    test('Need win, pick Rock', ()=> {
        let choices: string = 'C Z'
        let expectedScore: number = 7;
        let game: RpsSelectionGame = new RpsSelectionGame(choices)

        expect(game.getScore()).toEqual(expectedScore);
    })
})