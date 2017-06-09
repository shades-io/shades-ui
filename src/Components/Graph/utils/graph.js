
export const createGraph = () => {
    return {
        nodes: [],
        edges: []
    };
};

export const addEdge = (node, graph) => {

    if (!node || !graph) {
        throw new Error('Please provide a node and a graph object.');
    }
    
    if (!node.edge) {
        return;
    }

    const newEdge = {
        label: node.edge.label,
        from: node.edge.custom,
        to: node.id
    };

    graph.edges = [ ...graph.edges, newEdge ];
    
    return graph;
};

export const addNode = (node, graph) => {

    if (!node || !graph) {
        throw new Error('Please provide a node and a graph object.');
    }
    
    const newNode = {
        id: node.id,
        label: node.data.label,
        group: node.type
    };

    graph.nodes = [ ...graph.nodes, newNode ];

    return graph;
};

export const traverseNode = (node, onNext) => {

    if (!node || !onNext) {
        throw new Error('Please provide a node and a callback function.');
    }

    onNext(node);

    if (node.children && node.children.length) {
        node.children
            .forEach(childNode => {
                traverseNode(childNode, onNext);
            });
    }
};
