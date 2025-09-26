function parameter(obj){
    obj.name="asish"
    console.log(`inside :${obj.name}`)
}

let person={
    name:"asish joy"

}

console.log(`outside 1 : ${person.name}`)

parameter(person);

console.log(`outside 2 : ${person.name}`)