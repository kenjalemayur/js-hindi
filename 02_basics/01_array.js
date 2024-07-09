//array

const myArr = [1,2,3,4]
const myHeros = ["virat","rohit", "hardik"]

const myArr2 = new array(1,2,3,4)

// console.log(myArr[1]);

//arry method

myArr.push(6) // addnumber 
myArr.push(7)
myArr.pop() // remove last number 

myArr.unshift(3) // add startplace number 
myArr.shift() // dont use parameter

// console.log(myArr.includes(9));  // 9 is not in aary so output is flase (bolean datatype )
// console.log(myArr.indexOf(4)); // index positon 4 

// console.log(myArr);

const newarr = myArr.join()
console.log(newarr);
console.log(myArr); // convert to string

// slice and splice

console.log("a " , myArr );
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("c ", myArr) ///             slice()` creates a new array containing selected elements from the original, while `splice()` modifies the original array by adding, removing, or replacing elements.28 May 2024
console.log(myn1);
