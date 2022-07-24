// Async Parallel
// It takes array of function and result callback function
// It will run all the function parallel from the array and once everything is executed it will return call result callback
// In case of any error, it will stop execution and return null

function createAsynFunction() {
    let value = Math.floor(Math.random() * 10);
    return function (callback) {
        setTimeout(() => {
            callback(null, `${value} Function is executed`)
        }, value * 1000);
    }
}

const tasks = [createAsynFunction(), createAsynFunction(), createAsynFunction()];

function asynParallel(taskList, resultsCallBack) {
    let result = [];
    let taskCompleted = 0;

    taskList.forEach(task => {
        task((err, value) => {

            result.push(value);
            taskCompleted++;

            if (taskCompleted >= taskList.length) {
                resultsCallBack.call({}, err, result);
            }
        })

    })
}

asynParallel(tasks, function (err, data) {
    console.log(data)
})