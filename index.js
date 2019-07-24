const findAdjacent = (node, vertices, edges) => {
    return edges.filter(edge => edge.includes(node))
        .map(edge => {
        const adjacentNodeName = edge.find(nodeName => nodeName !== node)
        return vertices.find(vertex => vertex.name === adjacentNodeName)
    })
        .filter(vertex => vertex.distance === null)
}

const markDistanceAndPredecessor = (node, adjacentNodes) => {
        adjacentNodes.forEach(adjacentNode => {
        adjacentNode.distance = node.distance + 1
        adjacentNode.predecessor = node
    })
}

const bfs = (node, vertices, edges) => {
    let queue = []
    const visited = []
    queue.push(node)
    node.distance = 0
    while (queue.length > 0) {
        const adjacentNodes = findAdjacent(queue[0].name, vertices, edges)
        markDistanceAndPredecessor(node, adjacentNodes)
        queue = [...queue, ...adjacentNodes]
        visited.push(queue[0])
        queue.shift()
    }
    return visited
}