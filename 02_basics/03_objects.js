// singleton
// object.create

//object literals

const mysym = Symbol("key1")

const JsUser ={
    name:"mayur",
    [mysym]:"mykey1",
    email:"kenjae@ruti",
    age:19,
    location:"mumabi"
}
// console.log(jsuser.email);
// console.log(jsuser["email"])
// console.log(jsuser[mysym])

// JsUser.email = "mayur@chatgpt"
// //Object.freeze(jsUser)
// JsUser.email = "cat@2324"
//console.log(jsuser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());