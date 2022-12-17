import FlowNode from "./flowNode";

export default class Neighbor {
    constructor(
        public node: FlowNode,
        public distance: number
    ) {

    }
}