// /Implement a function to get unique tag names in a given DOM tree

// First check for current element and then its child nodes, apply recurison to child nodes 
// By using set we can store the unique values, Check the tagname 
// If its not exists the add to the set 

const uniqueTagname = (root, result = new Set())=>{
    if(!root) return [];

    // For current Element 
    if(!result.has(root.tagName)){
        result.add(root.tagName);
    }

    // For Children
    if(root.hasChildNodes()){
        for(let node of root.children){
            uniqueTagname(node, result);
        }
    }

    return [...result];
}