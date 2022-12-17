import Neighbor from "./neighbor";

export default class FlowNode {
    neighbors: Neighbor[] = [];
    
    constructor( 
        public name: string,
        public rate: number,
        public neighborNames: string[]
    ) {}

    getReport() {
        const attachedNeighbors: string[] = this.neighbors.map(neighbor => {
            return (`${neighbor.node.name}, ${neighbor.distance}`);
        });

        return (
            `Name: ${this.name}, Rate: ${this.rate}, Neighbors: ${attachedNeighbors}, NeighborNames: ${this.neighborNames}`
        );
    }
}