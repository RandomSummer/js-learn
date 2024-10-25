// Primitive 

// 7 Types: String, number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // both are same (number datatype)

const isLoggedIn = false
const outsideTemp = null // object
let userEmail; // undefined (by Default)

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); // false

const bigNumber = 3472987294247829


// Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["Ironman", "Thor", "Deadpool", "Wolverine"]

let myObj = { // object
    name: "RandomSummer",
    age: 20,
}

const myFunciton = function(){ // function
    console.log("Hello World");
    
}

console.log(typeof myFunciton)

