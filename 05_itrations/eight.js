const myNums = [1,2,3]

// const totalnum= myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} and currval:${currval}`);
// return acc + currval

// },0)

// const totalnum =myNums.reduce((acc,curr)=> acc+curr,0)
// console.log(totalnum);

const course = [
    {
        coursename: "java",
        price: 999
    },
    {
        coursename: "py",
        price: 1999
    },
    {
        coursename: "data science",
        price: 12999
    },
    {
        coursename: "mobile dev",
        price: 4999
    },
]
const totalcourse=course.reduce((acc,item)=> acc + item.price,0)
console.log(totalcourse);