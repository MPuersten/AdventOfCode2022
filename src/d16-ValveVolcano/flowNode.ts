export default class FlowNode {
    neighbors: FlowNode[] = [];
    
    constructor( 
        public name: string,
        public rate: number,
        public neighborNames: string[]
    ) {}

    getReport() {
        const attachedNeighbors: string[] = this.neighbors.map(neighbor => {
            return neighbor.name;
        });

        return (
            `Name: ${this.name}, Rate: ${this.rate}, Neighbors: ${attachedNeighbors}, NeighborNames: ${this.neighborNames}`
        );
    }
}