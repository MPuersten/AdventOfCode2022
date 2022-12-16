import * as fs from 'fs'
import FlowNode from './flowNode';

let flowNodeText: string[] = (fs.readFileSync('./assets/d16/d16-sample.txt', 'utf-8')).split(/\r?\n/);
// let flowNodeText: string[] = (fs.readFileSync('./assets/d16-input.txt', 'utf-8')).split(/\r?\n/);

function createFlowNode(nodeText: string): FlowNode {
    const params: string[] = nodeText.split(' ');
    
    const name: string = params[1];
    const rate: number = parseInt(params[4].split('=')[1]);
    
    let neighborNames: string[] = [];
    for (let i = 9; i < params.length; i++) neighborNames.push(params[i].replace(',', ''));

    const newNode: FlowNode = new FlowNode(name, rate, neighborNames);
    return newNode;
}

function connectNodeToNeighbors(node: FlowNode, nodes: FlowNode[]): FlowNode {
    nodes.forEach(potential => {
        if (node.neighborNames.includes(potential.name)) {
            node.neighbors.push(potential);
        }
    })

    return node;
}

let nodes: FlowNode[] = flowNodeText.map(line => { return (createFlowNode(line)); })
nodes = nodes.map(node => connectNodeToNeighbors(node, nodes));

console.log(nodes.forEach(node => console.log(node.getReport())));