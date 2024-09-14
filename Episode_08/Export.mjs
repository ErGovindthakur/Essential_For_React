// Writing a function to which will say hello and identify that i am from other module

const exported = () => {
     return "Hello i am from Export.mjs file, How are you doing now ?"
}
// console.log(exported())
export default exported;