
export const createGraph = () => {
    return {
        nodes: [],
        edges: []
    };
};

export const addEdges = (node, parentNode, graph) => {

    if (!node || !graph) {
        throw new Error('Please provide a node and a graph object.');
    }
    
    if (!node.edges || !parentNode) {
        return;
    }

    node.edges
        .forEach(edge => {
            const newEdge = {
                label: edge.label,
                from: parentNode.name,
                to: node.name
            };

            graph.edges = [ ...graph.edges, newEdge ];
        });

    return graph;
};

export const addNode = (node, graph) => {

    if (!node || !graph) {
        throw new Error('Please provide a node and a graph object.');
    }
    
    const newNode = {
        id: node.name,
        label: node.label,
        group: node.type
    };

    graph.nodes = [ ...graph.nodes, newNode ];

    return graph;
};

export const traverseNode = (node, parentNode, onNext) => {

    if (!node || !onNext) {
        throw new Error('Please provide a node and a callback function.');
    }

    onNext(node, parentNode);

    if (node.children && node.children.length) {
        node.children
            .forEach(childNode => {
                traverseNode(childNode, node, onNext);
            });
    }
};
