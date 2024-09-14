// Exploring fetch api method using js

// writing an async function to fetch data through api

const gitData = async() => {
     try{
          const myData = await fetch('https://api.github.com/users/ErGovindthakur')

          const response = await myData.json()
          console.log(response)

     }
     catch(err){
          console.log(err)
     }
}

// gitData()

// Doing the same thing using .then() .catch()

fetch('https://api.github.com/users/ErGovindthakur')
.then(async(data) => {
     let response = await data.json()
     console.log(response)
})
.catch((err) => {
     console.log(err)
})