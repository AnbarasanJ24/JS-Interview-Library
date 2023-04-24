// Create a pausbale auto incrementor, where we can decide the increment and pause functionality of the value 

// Steps 
// 1. We can use class or function for this, at last it should have starttimer and stop timer
// 2. start timer will increment the value using set interval and we need to store the timer Id
// 4. Stop timer will clear the stored timer id 

const autoIncrementor = (initialValue, incrementValue)=>{
    let count = initialValue;
    let timer = null;

    const startTimer =()=>{
        if(!timer){
            timer= setInterval(() => {
                console.log(count);
                count += incrementValue
            }, 1000);
        }
    }

    const stopTimer = ()=>{
        clearInterval(timer);
        timer = null;
    }

    return {startTimer, stopTimer}
}

const timeObj = autoIncrementor(1, 1);
timeObj.startTimer();
setTimeout(() => {
    timeObj.stopTimer();
}, 5000);