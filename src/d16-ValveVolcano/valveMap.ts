import FlowNode from "./flowNode";

export default class ValveMap {
    private onValves: FlowNode[] = [];
    
    constructor(
        public nodes: FlowNode[]
    ) {}

    maxPressure(currentNode: FlowNode, elapsedTime: number, flowRate: number, visitedNodes: FlowNode[], totalFlow: number) {
        if (elapsedTime > 30) return flowRate;

        let maxFlowRate: number = flowRate;
        let newFlow: number = totalFlow + maxFlowRate;

        currentNode.neighbors.forEach(neighbor => {
            let alreadyVisted: boolean = false;
            visitedNodes.forEach(visited => {
                if(neighbor.node.name === visited.name) {
                    alreadyVisted = true;
                    return;
                }
            })

            let newElapsedTime = elapsedTime + 1;

            if (!alreadyVisted) {
                const newFlowRate: number = flowRate + neighbor.node.rate;
                visitedNodes.push(neighbor.node);
                maxFlowRate = Math.max(maxFlowRate, this.maxPressure(neighbor.node, newElapsedTime + 1, newFlowRate, visitedNodes, newFlow));
            }
            
        })

        return totalFlow;
    }
}