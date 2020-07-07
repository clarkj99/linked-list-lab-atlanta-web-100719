const getName = (node) => {
    return node.name
}

const headNode = (node, collection) => {
    return collection[node]
}

const next = (node, collection) => {
    return collection[node.next]
}

const nodeAt = (index, start, collection) => {
    let node = collection[start];
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node
}

const addressAt = (index, start, collection) => {
    if (index > 0) {
        let node = nodeAt(index - 1, start, collection)
        return node.next
    } else {
        return start
    }
}

const indexAt = (node, collection, start) => {
    let current = collection[start];
    let i = 0;
    while ((current.next !== null) && (current !== node)) {
        current = next(current, collection)
        i++
    }
    return i
}

const insertNodeAt = (index, newKey, start, collection) => {
    if (index > 0) {
        const lastNode = nodeAt(index - 1, start, collection)
        collection[newKey].next = lastNode.next
        lastNode.next = newKey
    }
    else {
        collection[newKey].next = start
    }
}

const deleteNodeAt = (index, start, collection) => {
    if (index > 0) {
        const nodeBefore = nodeAt(index - 1, start, collection)
        const node = nodeAt(index, start, collection)
        nodeBefore.next = node.next
    }
}