

class NodeStore{
    constructor(){
        this.store ={};
    }

    set(node, value){
        node.__identifier = Symbol();
        this.store[node.__identifier]= value;
    }

    get(node){
        return this.store[node.__identifier]
    }

    has(){
        return !!this.store[node.__identifier]
    }

    delete(){
        delete this.store[node.__identifier];
    }
}

const nodeStore = new NodeStore();
let node = {data: 1, next : null};
nodeStore.set(node, 'Test');
console.log(nodeStore.get(node))