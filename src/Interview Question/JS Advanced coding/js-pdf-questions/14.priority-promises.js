// Create a function which takes array of promises, where we need to run the promise based on priority 
// Keep a track of most priroity, if any of the promise reject and i.e is most priority then move to next most priority
// If all the promise is rejected then return a custom array 

const asynTask = ()=>{
    let value = Math.floor(Math.random() * 10)
    return new Promise((resolve, reject)=>{
        if(value> 7){
            reject('Rejected', value)
        }else{
            resolve("Resolved", value)
        }
    })
}
const promises = [
    {task : asynTask, priority : 3},
    {task : asynTask, priority : 2},
    {task : asynTask, priority : 1},
    {task : asynTask, priority : 4},
]

const priorityPromises = (promises)=>{
    let taskCompleted = 0;
    let resolved =[];
    let rejected = [];
    let mostPriority = 0;

    return new Promise((resolve, reject)=>{
        promises.forEach(promise=>{
            Promise.resolve(promise)
            .then(value=>{

            })
            .catch(err=>{

            })
            .finally(()=>{
                
            })
        })
    })
}