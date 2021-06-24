// 1. what is Objects
    // Unordered Key and Value pairs 
// 2. When to use objects
    // Doesn't need to in order 
    // Insert, remove, fast access O (1) & searching O (N) (searching usually happen in value side)
// 3. Methods in objects 
    // Object.keys(), Object.values(), Object.entries() -> O (N) & Object.hasOwnProperty() -> O (1)

    let user = {
        "userName" : "Anbarasan",
        "age" : 25,
        "techStack" : ["Angular", "React","JS"],
        "address" : {
            "city" : "Pondicherry",
            "state" : "Pondicherry"
        } 
    }

    console.log(Object.keys(user))
    console.log(Object.values(user))
    console.log(Object.entries(user))
    console.log(user.hasOwnProperty('userName'))