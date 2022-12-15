import Position from "../../src/d09-RopeBridge/position";
import Dimesions2D from "../../src/d14-SandyCave/dimensions2D";
import Grid from "../../src/d15-SignalGrid/grid";

describe('Grid', () => {
    test('Grid creation is correct (dimensions, default characters)', ()=> {
        const dims: Dimesions2D = new Dimesions2D(0, 10, 0, 10);
        const gird: Grid = new Grid(dims, '.');
        
        const topLeft: Position = new Position(0, 0);
        const topRight: Position = new Position(10, 0);
        const topLeftWide: Position = new Position(-1, 0);
        const topRightWide: Position = new Position(11, 0);
        const bottomLeft: Position = new Position(0, 0);
        const bottomRight: Position = new Position(10, 0);
        const bottomLeftWide: Position = new Position(-1, 0);
        const bottomRightWide: Position = new Position(11, 0);

        expect(gird.getContent(topLeft)).toEqual('.');
        expect(gird.getContent(topRight)).toEqual('.');
        expect(gird.getContent(topLeftWide)).toEqual(undefined);
        expect(gird.getContent(topRightWide)).toEqual(undefined);
        expect(gird.getContent(bottomLeft)).toEqual('.');
        expect(gird.getContent(bottomRight)).toEqual('.');
        expect(gird.getContent(bottomLeftWide)).toEqual(undefined);
        expect(gird.getContent(bottomRightWide)).toEqual(undefined);
    })
})
