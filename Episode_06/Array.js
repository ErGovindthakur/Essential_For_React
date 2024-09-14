// Exploring array and its methods in js

const arr1 = [10,20,30,40,50,'Apple',true]
// console.log(arr1)

// Adding element at the end of the array
arr1.push('Orange')
// console.log(arr1)

// Adding element at the start of the array
arr1.unshift('Mango')
// console.log(arr1)

// Traversing array using for loop

for(let i =0; i<arr1.length; i++){
     // console.log(`Index => ${i} `,arr1[i])
}

// map method in js

const mapped = arr1.map((val,index,arr) => {
     return val*2;
})
console.log(mapped.length)

// Let's take an real life example to explore map method more

let products = [
     {name:'Apple',price:99},
     {name:'Mobile',price:1200},
     {name:'Orange',price:100},
     {name:'Shirt',price:1000},
     {name:'Bike',price:100000},
     {name:'Mobile',price:120000},
]

let productData = products.map((val) => {
    return val.price>120 ? val.name:"Below price products"
})
console.log(productData)

// Applying filter() method at above array
let price = 0;
let filteredData = products.filter((val,index,arr) => {
     // return val.price>120

     // Applying another condition into the filter method
     if(val.name === 'Mobile'){
          price = price + val.price;
          return price;
     }
})
console.log(filteredData)

// Applying reduce method 

let reduceData = products.reduce((prev,cur,ind) => {
    return prev + cur.price
     //  Applying condition 
     // if(cur.name === "Mobile"){
     //      return prev + cur.price;
     // }
},0)
console.log('The total price = ',reduceData)