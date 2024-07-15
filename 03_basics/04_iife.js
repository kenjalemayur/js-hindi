// immediatly invoked function expression (iife)

(function chai() {
    // console.log(`db coonnected`); "iife function" globle scope ke pollution se problem hoti hai kai baarr to usko hatne ke liye iife ka use krte hai
})()

(function chai() {
      console.log(`db coonnected`); //"iife function" globle scope ke pollution se problem hoti hai kai baarr to usko hatne ke liye iife ka use krte hai
})(); // use semi-coln end of the code


((name)=>{
    console.log(`db connected two ${name}`);
})("hitesh")

