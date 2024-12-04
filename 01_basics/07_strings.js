// Strings


const name = "bhupesh"
const sirname = " patni "

// console.log(name + sirname + 45)

// console.log(`My name is ${name} and my sir name is ${sirname}`) // more readable........

const gamename = new String("patni")  // declare string with some functions

// console.log(gamename[0])
// console.log(gamename.__proto__);

// console.log(gamename.length)   //String Methods In Js
// console.log(gamename.toUpperCase())
// console.log(gamename.charAt(3))
// console.log(gamename.indexOf("t"))

//slicing..
// console.log(gamename.substring(0,3))
// console.log(gamename.slice(-4,3))

//Trim 
let a = "    hello  "
// console.log(a)
// console.log(a.trim())

const url = "https://patni.com/bhupesh%20patni"

// console.log(url.replace("%20","_"))

// console.log(url.includes("patn"))
console.log(url.split("-"));





