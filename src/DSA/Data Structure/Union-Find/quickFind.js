// Dynamic Connectivity - Union-Find
// It checks if two objects are connected or not and
// Make connection between two objects

/* 0, 1, 2, 3, 4, 5, 6, 7, 8 */
let arr = [0, 1, 1, 8, 8, 0, 0, 1, 8]

// Here {0,5} & {1,2,7} & {3,4,7,8} are connected
//  because they have same values

// Time complexity Find - O (1) and Union - O (N)
// In worst case it will be O (N), So we can try quick Union

// Quick Find of Union FInd Data structure
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
        // base case
        if (idx1 < 0 || idx1 > count) return;
        if (idx2 < 0 || idx2 > count) return;

        return id[idx1] === id[idx2];
    }

    union(idx1, idx2) {
        // base case
        if (idx1 < 0 || idx1 > count) return;
        if (idx2 < 0 || idx2 > count) return;

        let p = id[idx1];
        let q = id[idx2];

        for (let i = 0; i < count; i++) {
            if (id[i] === p) id[i] = q;
        }

        return this.id;
    }
}