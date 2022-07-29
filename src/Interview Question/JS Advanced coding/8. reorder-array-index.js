/**
 * For a given Array we need to change the order based on order array 
 * const A =    ['A', 'B', 'C', 'D', 'E', 'F']
 * const B =    [ 1  , 5 ,  4 ,  3,   2 ,  0 ]
 * let result = ['F', 'A', 'E', 'D', 'C', 'B']
 */

/**
 * Approach: On loop the A array, we will check currentIndex and newIndex are same or not 
 * If they are notsame , we need to swap the value in both A and B array 
 * A[currentIndex] swapped with A[newIndex], to maintain the order in B, we need to swap B[currentIndex], B[newIndex] too
 * T.c => O(N)
 */

 function sort(items, newOrder) {
    for(let currentIndex = 0; currentIndex < items.length ; currentIndex++){
      let newIndex = newOrder[currentIndex];
      if(currentIndex !== newIndex){
        [items[currentIndex], items[newIndex]] = [items[newIndex], items[currentIndex]];
        [newOrder[currentIndex], newOrder[newIndex]] = [newOrder[newIndex], newOrder[currentIndex]];
      }
    }
}
