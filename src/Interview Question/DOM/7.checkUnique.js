// Implement a function to check if a given DOM tree has duplicate IDs

const hasDuplicateId = (root, result = new Set())=>{
    if(!root) return false;

    if(result.has(root.id)) return true;

    result.add(root.id);

    if(root.hasChildNodes()){
        for(let child of root.children){
            let isDuplicate = hasDuplicateId(child, result);
            if(isDuplicate) return true;
        }
    }

    return false;
}