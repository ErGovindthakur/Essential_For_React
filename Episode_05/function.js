// Exploring function in js

function sayHello(a){ // parameters
     // function declaration
     return a;

}
// function call
console.log(sayHello("Hello"))

// Function expression -> Whenever we hold a function within a variable called function expression if the function with name called named function expression and if without name called anonymous function

//eg-:

let calculateSum = function sum(){
     let a = 4+5;
     return a;
}
// console.log(calculateSum())

// Callback function -> The function which generally occur after the completion of task or events

let yourOrders = (orderDeliver) => {
     console.log('Prathe are being cocked')
     // Here applying a setTimeout function to call the function back
     setTimeout(() => {
          orderDeliver()
     },2000)

}

let orderDeliver = () => {
     console.log('Prathe are ready to serve')
}

// yourOrders(orderDeliver)

// Let's understand the higher order function

let circleRadius = [2,3,4,5,6,7];

let findCircleArea = () => {
     let resultant = []
     for(let i = 0; i<circleRadius.length; i++){
          // formula = 2⊓(r*r)
          let formula = 2 * Math.PI * (circleRadius[i] *circleRadius[i])
          resultant.push(formula.toFixed(2))
     }
     return resultant
}
console.log(findCircleArea())

// Doing the same thing using higher order function

const areaFinder = (radius) => {
     const formula = Math.PI*radius*radius
     return formula;
} 

// Designing a arrow function to calculate area

const areaCalculator = (circleRadius, formula) => {
     let arrToStore = []
     for(let i = 0; i<circleRadius.length; i++){
          let resultant = formula(circleRadius[i])
          arrToStore.push(resultant)
     }
     return arrToStore
}
console.log('Total area = ',areaCalculator(circleRadius,areaFinder))