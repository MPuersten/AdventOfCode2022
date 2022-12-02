import RpsGame from "../src/rockPaperScissors/rpsGame";

describe('Rock Paper Scissors Game', () => {
    test('Get Win Score, with Paper', ()=> {
        let choices: string = 'A Y'
        let expectedScore: number = 8;
        let game: RpsGame = new RpsGame(choices)

        expect(game.getScore()).toEqual(expectedScore);
    })

    test('Get Loss Score, with Rock', ()=> {
        let choices: string = 'B X'
        let expectedScore: number = 1;
        let game: RpsGame = new RpsGame(choices)

        expect(game.getScore()).toEqual(expectedScore);
    })

    test('Get Draw Score, with Scissors', ()=> {
        let choices: string = 'C Z'
        let expectedScore: number = 6;
        let game: RpsGame = new RpsGame(choices)

        expect(game.getScore()).toEqual(expectedScore);
    })
})