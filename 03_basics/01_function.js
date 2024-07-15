function SayMyNmae(){
    console.log("m");
    console.log("a");
    console.log("y");
    console.log("u");
    console.log("r");
}
// SayMyNmae()

function addTwoNumber(num1,num2){ // parameters 
    console.log(num1 + num2);
    
}
function addTwoNumber(num1,num2){ // parameters 
//    
 return num1+num2
    
}
const result = addTwoNumber(3,9) // arguments


// console.log("Result:",result);

function logginUserMessage(username = "sam"){
    return `${username} just logged in`
}
//  console.log(logginUserMessage("hitesh"))
//  console.log(logginUserMessage(""));

function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(100,200))

const user = {
    username:"mayur",
    price:199

}

function handleObject(anyobject){
        console.log(`username is ${anyobject.username} andprice is ${anyobject.price}`);
}


handleObject(user)

const myarray = [200,300,400,500]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(myarray));













