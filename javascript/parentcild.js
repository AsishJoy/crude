// class and object 


class person{
    constructor(name,age)
    {
        name=this.name;
        age=this.age;

    }
    greet(){
        console.log(`hello my name is ${this.name} and my age is ${this.age}`)
    }
}

const person1= new person("Ajeesha","21")
person1.greet()




// encapsulation 



class people{
    #age;
    constructor(name,age){
        name=this.name;
        age=this.#age;
    }
    getage(){
        return this.#age
    }
}

const p1=new people("Ajeesha","21")

console.log(p1.name)
console.log(p1.age)
console.log(p1.getage())




// abstraction


class cofeeshop{
    start(){
        console.log("starting to make cofee......");
    }
    making(){
        console.log("making cofee.....");
    }
    process(){
        this.start()
        this.making()
        console.log("cofee is ready");
    }
}

const machine= new cofeeshop();
machine.process();