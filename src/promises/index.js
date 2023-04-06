//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


const promise = new Promise(function (resolve, reject) {
    if(true){
        resolve("hey!")
    } else {
        reject("whooops")
    }
})

//Example 

const cows = 5 //changing the number of cows to cause a resolve or reject output

const countCows = new Promise((resolve, reject) => {
    if(cows > 10){
        resolve("Just enough milk!")
    } else {
        reject("Sorry, there's not enough cows")
    }
})

countCows.then((result) => {
    //handles resolves
    console.log(result)
}).catch((error) => {
    //handle rejects
    console.log(error)
}).finally(() => {
    //handle the after execution of the previous results
    console.log("Its all for today!")
})