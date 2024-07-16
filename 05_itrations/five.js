// for each

const coding = ["java", "py", "cpp", "ruby"]

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((item) => {     // use arrow function
//     console.log(item);
// })]


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((items ,index, arr)=>{
//     console.log(items, index, arr);

// })




const myArray = [
    {
        FileLanguage: "javascript",
        FileName: "js"
    },
    {
        FileLanguage: "java",
        FileName: "java"
    },
    {
        FileLanguage: "pyhon",
        FileName: "py"
    }
]
myArray.forEach((items) => {
    console.log(items.FileName);
})