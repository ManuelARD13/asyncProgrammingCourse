//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function sum(num1, num2){
    //callback
    return num1 + num2
}

function calc(num1, num2, callback){
    //outer function
    return callback(num1, num2)
}

console.log(calc(2,2, sum))

function greeting(name){
    //callback function
    console.log(`Hi ${name}`)
}

//outer function
setTimeout(greeting, 3000, "M")