//Primitive 

// 7 type => number ,null,bollean,bigInt, string,symbol, undefine

const score = 100
const scorevalue = 100.6
const outsidetemp = null
const isLoggedIn = false
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigInt = 480505450n

// Non primitve => object,array,Function 
const heros = ["virat", "hardik","Rohit"]


let obj = {
    Name:"mayur",
    age:93,
}

const myFunction = function() {
    console.log("hello world");
}

//======================================================================================

 // stack(primitive)  heap(non primitive)

let myyoutubename = "mayurkenjalegameing"

let anotheName = myyoutubename
anotheName = "harshkhelry"


console.log(myyoutubename);
console.log(anotheName);

 let usernameone ={
    email: "mayur@gmail.com",
    upi: "user@ybl"
}


let userTwo = userone

userTwo.email = "mbk@gamil.com"

 console.log(userone.email);
 console.log(userTwo.email);
