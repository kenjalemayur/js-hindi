// const userEmail = ""

// if (userEmail) {
//     console.log("show the email");
    
// }else{
//     console.log("dont have show email");
// }

// falsy value

// false, 0, -0, BigInt 0n, "" , null, NaN, undefined

// truthy value

// "false", "0", " ", [], {}, function(){}

const emtyobj = {}

if (Object.keys(emtyobj).length == 0) {
    console.log("object is empty");
    
}

// Nullish coalescing oprator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 30
val1 = undefined ?? 50
console.log(val1);

//ternairy oprator

// condition ? true: false

const iceTeaprice = 100
iceTeaprice <=80 ? console.log("less than 80"): console.log("more than 80");