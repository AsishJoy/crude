console.log("start");

setTimeout(() => {

    console.log("set time out");

},);

Promise.resolve().then(()=>{
    
    console.log("promise")
})

console.log("end")




