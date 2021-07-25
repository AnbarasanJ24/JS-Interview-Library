// Dynamic Connectivity - Union-Find
// It checks if two objects are connected or not and
// Make connection between two objects

/* 0, 1, 2, 3, 4, 5, 6, 7, 8 */
let arr = [0, 1, 1, 8, 8, 0, 0, 1, 8]

// Here {0,5} & {1,2,7} & {3,4,7,8} are connected
//  because they have same values

class UF {
    id = [];

    constructor(count) {
        this.count = count;
        for (let i = 0; i < count; i++) {
            id[i] = i;
        }
    }

    // Check if p and q values are same, if so they are connected  
    find(idx1, idx2) {
        return id[idx1] === id[idx2];
    }

    union(pos1, pos2) {

    }
}