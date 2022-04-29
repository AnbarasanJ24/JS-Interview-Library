<!-- Em -->
- It is based on parent, if the parent font size is 20px then child's 1em = 20px
- By defult 1em is 16px, but when we font-size in parent it will be based on parent
- when the parent increase then the child property will also increase more like compound problem
- All other properties like margin, padding will not based on parent, it will be based on child font size 

.parent{
    font-size: 20px;
}

.child{
    font-size : 2em //2em = 40px
    margin-bottom : 2em // 1em = 2em => 2* 2em => 4em (80px)
}

- Its good to go with em for giving padding and margin, so based on the font-size it will change 
- If we need to make consistent look then rem will be good 

<!-- rem (Root em) -->
- Introduced to solve problem with em, it will change as per the parent property changes
- It will work based on root element or html element 
