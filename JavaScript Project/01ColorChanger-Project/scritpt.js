// first pormise
// const prominseOne = new Promise(function(resolve, reject){
    //Do an async task 
    // Database calls, cryptography , network
//     setTimeout(function()  {
//         console.log("asynk task is complete")
//         resolve()
//     },1000)
// })
// prominseOne.then(function(){
//     console.log("Promise consumed");
// })

// Second Promise
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// Third Promise

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Hi arun Promise third is excuted")
//         resolve()
//     },2000)

// }).then(function(){
//     console.log("This is the second excution")
// })

// fetch('https://api.github.com/users/hiteshchoudhary')

// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error)
// })


// function addone(num) {
//     return num + 1
    
// }

// addone(5);

// function outer() {
//     let username = "arun";
    
//     function inner() {
//         let secret = "my123";
//         console.log("inner", username);

//     }
//     function innerTwo() {
//         console.log("innerTwo", username);
//         console.log(secret)
//     }
//     inner()
//     innerTwo()
// }
// outer()


function clickHandler(color) {

    return function() {
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("purple")
document.getElementById('green').onclick = clickHandler("green")