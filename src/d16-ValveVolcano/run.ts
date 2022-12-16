import * as fs from 'fs'
import FlowNode from './node';

function createFlowNode(nodeText: string): FlowNode {
    const params: string[] = nodeText.split(' ');
    
    const name: string = params[1];
    const rate: number = parseInt(params[4].split('=')[1]);
    
    let neighborNames: string[] = [];
    for (let i = 9; i < params.length; i++) neighborNames.push(params[i]);

    return new FlowNode(rate);
}

// function connectNodeToNeighbors(node: FlowNode, nodes: FlowNode[]): FlowNode {

// }

let flowNodeText: string[] = (fs.readFileSync('./assets/d16/d16-sample.txt', 'utf-8')).split(/\r?\n/);
// let flowNodeText: string[] = (fs.readFileSync('./assets/d16-input.txt', 'utf-8')).split(/\r?\n/);

let nodes: FlowNode[] = [];
flowNodeText.forEach(line => { nodes.push(createFlowNode(line)); })
// nodes = nodes.map(node => connectNodeToNeighbors(node, nodes));

console.log(JSON.stringify(nodes));