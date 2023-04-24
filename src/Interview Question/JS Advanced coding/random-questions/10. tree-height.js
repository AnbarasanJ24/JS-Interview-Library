/**
 * For the give DOM Tree [N-ary Tree], we need to find the height of it
*   <div>
        <div>
            <p>
            <button>Hello</button>
            </p>
        </div>
        <p>
            <span>World!</span>
        </p>
    </div>
 */


/**
 * Approach: We know the root height is 1,so we need to recursively find the height of children
 * Each children has different height, so make sure will take the max height between the children
 * Now we have root height as 1 and children max height, so result = 1+ maxHeight;
 * T.c & S.c = O(N) 
 */

function getHeight(tree) {
    return heightOfTree(tree)   
  }
  
  function heightOfTree(root){
    if(root === null) return 0;
  
    let maxheight = 0; 
    if(root.hasChildNodes()){
      for(let child of root.children){
        maxheight = Math.max(maxheight, heightOfTree(child));
      }
    }
  
    return 1 + maxheight;
}