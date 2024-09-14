// Exploring array and object destructuring

const myArray = [1,2,3,4,5,6,7,8,9];

const anotherArray = myArray;
console.log(`myArray = ${myArray} and anotherArray = ${anotherArray}`)

// Let's do some changes in another array 

anotherArray.push(10) 
// Note here change in one array affect another array
console.log(`myArray = ${myArray} and anotherArray = ${anotherArray}`)

// Let's understand destructuring 

const [a,b,c,d,e] = myArray;
console.log(`Destructured value = ${e}`)

// Now time to explore the object destructuring
let status = Symbol('Millionaire')
let myDetails = {
     name:'Govind',
     age:19,
     profession:'web-developer',
     [status]:'Millionaire'
}
console.log(myDetails[status])
// Destructuring objects

const {name,age,profession} = myDetails;
console.log(name)
console.log(age)
console.log(profession)
console.log(myDetails[status])