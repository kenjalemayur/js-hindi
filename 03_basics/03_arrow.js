const user = {
    username : "mayur",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to user `)
        console.log(this); // "this" current context ko reffer krta hai
    }
}
// user.welcomeMessage()
// user.username = "saaaam"
// user.welcomeMessage()

//  console.log(this);  this is emty


// function chai (){
//     console.log(this);

// }
// chai()

// const chai = function(){
//     let username =  "hitesh"
//     console.log(this.username);
// }
// chai()
const chai = () => {
    let username =  "hitesh"
    console.log(this);
}
// chai()
 
// const addTwo = (num1,num2) => {  // basic arrow function
//     return num1+num2

//  }

// const addTwo = (num1,num2) => num1+num2    // arrow function sem
// const addTwo = (num1,num2) => (num1+num2)   if use curly braket then use return else normal bracket
const addTwo = (num1,num2) => ({username:"hitesh"})
 console.log(addTwo(3,4));
