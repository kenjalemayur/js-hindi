let a = 300
if (true){
    let a = 20
    const b = 30
    console.log("INEER: ",a);  // blok scope and globle scope 
}
console.log(a);

// nested scop

function one (){
    const username = "hitesh"

    function two (){
        const website = "yourube"
        console.log(username);
    }
    two()
}
one() 


// ++++++++++++++++++++++++++++  intrsting  +++++++++++++++++++++++++++===
console.log(addOne(5))
function addOne(num){
    return num + 4
}


////////////////////

console.log(addTwo(4))            //hosting
const addTwo = function(num){
    return num + 1
}
