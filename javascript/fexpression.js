// function expression 

let sum=function(a,b)
{
    console.log(a+b);
}
sum(9,10);

// arrow function

let hello=(a,b)=>{ 
    return a+b
}
console.log(hello(2,7))

// immediate invoke function 

let b=(function() {
console.log("hello!");
})();

// higher order function

function frst(){
    console.log("hello everyone!!")
}

function scnd(action)
{
    action();
    console.log("hello everyone here !!")
}

scnd(frst);

// call back function 

function first(name){
    console.log("hello " +name);
}

function second(callback){
    const name="Asish";
    callback(name);
}
second(first);


// recursive function

function factorial(n) {
if (n <= 1) return 1;
return n * factorial(n - 1);
}
console.log(factorial(4));


