// Implement a function to get the root node of a given DOM fragment (document.getRootNode() method)

Element.prototype.getRootNode = function(){
    const element = this;

    while(element.parentElement){
        element = element.parentElement;
    }

    return element;
}