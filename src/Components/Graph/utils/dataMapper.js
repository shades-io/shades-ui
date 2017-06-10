
import { 
    createGraph,
    traverseNode,
    addNode,
    addEdges
} from './graph';

export const dataModelToVisModel = data => {
    
    const graph = createGraph();
    const root = data.result;

    traverseNode(root, false, (node, parentNode) => {
        addNode(node, graph);
        addEdges(node, parentNode, graph);
    });

    return graph;
};
