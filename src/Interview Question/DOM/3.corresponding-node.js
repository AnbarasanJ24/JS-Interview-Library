// For given two identical DOM with a target element, we need to find the element on corresponding DOM
const DOM_A = document.createElement();
DOM_A.innerHTML= `
<div>
    <div>
        <div>
            <div id="node1"></div>
        </div>
    </div>
    <div>
        <div>
            <div id="node2"></div>
        </div>
    </div>
</div>`;

const DOM_B = DOM_A.cloneNode(true);
const target1 = DOM_B.querySelector('#node1');

// We need to traverse DOM_A and check target exists or not 
// Check DOM_A matches the target then return it 
// Else check its child nodes using ChildElementCount and Children 

const correspondingNode = (DOM_A, DOM_B, target)=>{
    if(DOM_A === target) return target;

    if(DOM_A.childElementCount){
        for(let index = 0; index < DOM_A.childElementCount; index++){
            let result = correspondingNode(DOM_A.children[index],DOM_B.children[index],target);
            if(result) return result;
        }
    }
}

const result = correspondingNode(DOM_A, DOM_B, target1);