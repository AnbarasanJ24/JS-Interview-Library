// Ancestor selector - Find the element which matches the selector and the find goes from child to parent 
{/* <article>
  <div id="div-01">
    Here is div-01
    <div id="div-02">
      Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article> */}
// const el = document.getElementById("div-03");
// console.log(el.closest("#div-02")); // <div id="div-02">
// console.log(el.closest("article > div")); // <div id="div-01">

Element.prototype.customClosest = function(selector){
    let element = this;
    while(element){
        if(element.matches(selector)){
            return element;
        }
        element = element.parentElement;
    }
    return null;
}