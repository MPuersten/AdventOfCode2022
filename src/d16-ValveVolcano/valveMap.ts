import FlowNode from "./flowNode";

export default class ValveMap {
    private onValves: FlowNode[] = [];
    
    constructor(
        public nodes: FlowNode[]
    ) {}

    maxPressure(currentNode: FlowNode, elapsedTime: number, flowRate: number) {
        if (elapsedTime > 30) return flowRate;

        let maxFlowRate: number = flowRate;

        currentNode.neighbors.forEach(neighbor => {
            const newFlowRate: number = flowRate + neighbor.node.rate;
            maxFlowRate = Math.max(maxFlowRate, this.maxPressure(neighbor.node, elapsedTime + 1, newFlowRate));
        })

        return maxFlowRate;
    }
}