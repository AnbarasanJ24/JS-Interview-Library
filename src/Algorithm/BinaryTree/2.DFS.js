/**
 * Traverse the tree using DFS
 */

// Notes
// Do a normal DFS with stack 
// Push head to the stack 
// Pick a element and add its neighbour
// Repeat untill stack is empty 

const DFSIterative = (root) => {
    if (root === null) return [];

    const stack = [root];
    let result = [];
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return result;
}

// Notes
// Base case : when rootb is null return
// Check root has left or right and make recursive call for them 
const DFSRecursive = (root) => {
    if (root === null) return [];

    const leftValues = DFSRecursive(root.left);
    const rightValues = DFSRecursive(root.right);

    return [root.val, ...leftValues, ...rightValues];
}


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(DFSRecursive(a));

// time : O (N)
// space: O (N)