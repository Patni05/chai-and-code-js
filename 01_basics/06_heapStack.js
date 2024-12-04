// Stack and Heap..........


// Stack => Use in Primitive DT, Passes a Copy of a variable , Change in copy , multipes indexes/blocks
// Heap => Non Primitive , Reference , change in Original value , single block

// ************STACK***************

let name_first= "patni"
let anotherName = names
    anotherName = "singh"

// console.log(anotherName)    if we change in (anotherName) , (name_first) will not change....
// console.log(name_first)      NOte :  Here the 2nd variable is just a copy of 1st variable , so ofcourse original(1st) will not change only copied will change


// ***********HEAP**********
let user1 = {
    email: "patni@gmail.com",
    name : "sonu",
    upi : "oksbi"

}

let user2 = user1

user2.email = "bhupesh"
console.log(user1)               //if we change in user 2 it will reflect in user 1 ,beacuse the it consider reference...
console.log(user2.email)
















/* 1.5 kamre ki ek duniya mai
ek bistar h , kuch kitabe hai (2)

aane jane ka ek darwaja 
kher ab aata bhi kaun h ghar mai

ab bhool gye hum vo maa ki maar 
bhut yaad aate hai vo purane yaar

kuch vo jinka isme koi jikra nhi 
kher mujhko bhi koi fikra nhi

aae jae koi bala se meri 
dosti ho gyi kaja se meri 

ab ye hi daur chahiye mujhko 
chai ek aur chahiye mujhko

*/

