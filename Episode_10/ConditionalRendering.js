// Exploring conditionals like (if, else, ternary, &&)

// if ,else statement

let AllowToDrive = (age) => {
     if(age >= 18){
          return 'You are eligible to drive'
     }
     else{
          return 'You can not drive'
     }
}

console.log(AllowToDrive(19))


// Ternary operator 

let Allow = ('b'>'a') ?"Yes correct":("Not correct");
console.log(Allow)

let a = 'a';
let b = 'b';
console.log('a = ',a.codePointAt())
console.log('b = ',b.codePointAt())

// Conditional rendering mostly used in react

// let myName = ' ' // You can also check this
let myName = 'Govind'
console.log(myName && 'Yes You are Govind') // It's totally depends on truthy and falsy value

// Optional chaining => (?.) You are using this operator while accessing any function or objects properties if that is not available you will only get undefined instead of throwing an error

// eg-:

const adventurer = {
     name:'Bilu',
     fish:{
          name:'Dolphin'
     },
}

// const catName = adventurer.cat;
const catName = adventurer.cat?.name;
console.log(catName)