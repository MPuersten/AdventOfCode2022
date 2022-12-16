export default class FlowNode {
    neighbors: FlowNode[] = [];
    
    constructor( 
        public value: number
    ) {}
}