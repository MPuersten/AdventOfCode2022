import * as fs from 'fs'
import Heightmap from '../../src/d12-ClimbingPath/heightmap';

describe('Height Map', () => {
    let map: Heightmap
    let sampleMap: Heightmap

    beforeEach(() => {
        let sampleHeightmapText: string[] = (fs.readFileSync('./assets/d12/d12-sample.txt', 'utf-8')).split(/\r?\n/);
        sampleMap = new Heightmap(sampleHeightmapText);
        
        let heightmapText: string[] = (fs.readFileSync('./assets/d12-input.txt', 'utf-8')).split(/\r?\n/);
        map = new Heightmap(heightmapText);
    })

    test('Correct value for shortest path on sample', ()=> {
        let expectedValue: number = 31;
        expect(sampleMap.findShortestPathToGoal()).toEqual(expectedValue);
    })

    test('Correct value for shortest path from top on sample', ()=> {
        let expectedValue: number = 29;
        expect(sampleMap.findShortestPathFromGoalToLowestLevel()).toEqual(expectedValue);
    })

    test('Correct value for shortest path on real', ()=> {
        let expectedValue: number = 412;
        expect(map.findShortestPathToGoal()).toEqual(expectedValue);
    })

    test('Correct value for shortest path from top on real', ()=> {
        let expectedValue: number = 402;
        expect(map.findShortestPathFromGoalToLowestLevel()).toEqual(expectedValue);
    })
})