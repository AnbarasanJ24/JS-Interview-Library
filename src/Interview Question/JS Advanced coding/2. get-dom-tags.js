/**
 * Given root node as tree and children node, we need to find its tag name and return in a array
 * This is a variation of N-Ary Post Order Traversal
 */

function getTags(tree, tags = new Set()) {
    // N- Ary Post Order traversal
    tags.add(tree.tagName.toLowerCase())
    if(tree.childElementCount){
      for(let child of tree.children){
        getTags(child, tags);
      }
    }
    return [...tags];
  }