
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
        for (let i = 0; i < this.count; i++) {
            this.id[i] = i;
        }
    }

    // Check if p and q values are same, if so they are connected  
    find(idx1, idx2) {
        return this.id[idx1] === this.id[idx2];
    }

    union(idx1, idx2) {
        // base case
        if (idx1 < 0 || idx1 > this.count) return;
        if (idx2 < 0 || idx2 > this.count) return;

        let p = this.id[idx1];
        let q = this.id[idx2];

        for (let i = 0; i < this.count; i++) {
            if (this.id[i] === p) this.id[i] = q;
        }

        return this.id;
    }
}

let uf = new UF(10);
uf.union(4, 3);
uf.union(3, 8);

console.log(uf.find(3, 1))