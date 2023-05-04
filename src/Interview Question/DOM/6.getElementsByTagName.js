// Implement a function to get elements by tag name (document.getElementsByTagName() method)

// Check for the current element and then recurively for child nodes
// For current element, if it matched with tag name then add to the result 
// For child nodes, recurivisely call the function for all child node and store the result 

function getElementsByTagName(root, tagName){
    if(!root) return [];
    let result = [];

    // For current element
    if(root.tagName.toLowerCase() === tagName.toLowerCase()){
        result.push(root);
    }

    // For children
    if(root.hasChildNodes()){
        for(let node of root.children){
            result = result.concat(getElementsByTagName(node, tagName))
        }
    }

    return result;
}