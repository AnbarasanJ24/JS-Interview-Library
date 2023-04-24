/**
 * For a given DOM Tree, we need to traverse level by level 
 */

/**
 * Approach: Since we need to traverse level by level, we need to process the nodes based on the sequence of insert
 * queue will maintain FIFO, start with root, process it and check the root hs childNodes
 * If so, process the child nodes also, make sure this process happens only the queue is not empty 
 * T.c & S.c => O(N)
 */


 function flatten(root) {
    let visited = [];
    traverseNodes(root, visited);
    return visited;
  }
  
  function traverseNodes(root, visited){
    if(root === null) return [];
    let queue = [root];
  
    while(queue.length){
      let currentNode= queue.shift();
      visited.push(currentNode);
  
      if(currentNode.hasChildNodes()){
        for (let child of currentNode.children){
          queue.push(child);
        }
      }
    }
  }