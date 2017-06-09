
import { 
    createGraph,
    traverseNode,
    addNode,
    addEdge
} from './graph';

export const dataModelToVisModel = data => {
    
    const graph = createGraph();
    const root = data.result;

    traverseNode(root, node => {
        addNode(node, graph);
        addEdge(node, graph);
    });

    return graph;
};
