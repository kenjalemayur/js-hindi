// const myArray = ["virat", "rohit", "hardik"]


//  const value = myArray.forEach((item

//  )=>{
//     console.log(item); 
//     return item 
// });
// console.log(value);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> { // dont use bracket then use return 
//    return num>4
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach((num) => {
// if (num > 4) {
//     newNums.push(num)
    
// }
// })
// console.log(newNums);


const book = [
    { title:"Book one", genre: "fiction", publish:2002},
    { title:"Book two", genre: "fiction", publish:2005},
    { title:"Book three", genre: "fiction", publish:3902},
    { title:"Book four", genre: "science", publish:3902},
    { title:"Book five", genre: "fiction", publish:2006},
    { title:"Book six", genre: "fiction", publish:20092},
    { title:"Book seven", genre: "fiction", publish:20092},
    { title:"Book eight", genre: "fiction", publish:20034},
]

 const userbook = book.filter((bk) => bk.publish === 3902 && bk.genre === "science")
 console.log(userbook);