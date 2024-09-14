// Exploring spread operator in js

// use in array/operator (eg -: ...) use to duplicate the value

const arr = [12,13,14,15,16]
console.log(`Original array = ${arr}`)
const duplicateArr = [...arr,17,18] // returning a new array

console.log(`Duplicate array = ${duplicateArr}`)


// Q) Merge two array using spread operator

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

const resultArray = [...arr1, ...arr2]
console.log(`The resultant array = ${resultArray}`)


// Q) Merge objects using spread operator

const data1 = {
     name:'Ajay',
     age:21
}
const data2 = {
     profession:'App developer',
     from:'India'
}

const finalData = {...data1, ...data2}
console.log(finalData)

// Function in js

function sum(a,b,c,d,e){
     return a+b+c+d+e
}
console.log('Total sum = ',sum(1,2,3,4,5))


// application of spread operator in function

function multiplication(...numbers){
     // Note -: if you are using the spread operator in and storing the value in that it will simply return the value in array formate

     // Now applying loop and doing the same work like above function
     let multiply = 1;
     for(let i = 0; i<=numbers.length - 1; i++){
          multiply *= numbers[i]
     }
     return multiply
}
console.log('Total product = ',multiplication(1,2,3,4,5))
