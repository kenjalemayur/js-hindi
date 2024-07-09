// ========== Dates ===========//

// let myDates = new Date()
// console.log(myDates.toString());  /// Sat Jul 06 2024 09:25:10 GMT+0000 (Coordinated Universal Time)
// console.log(myDates.toDateString());///Sat Jul 06 2024
// console.log(myDates.toISOString());//2024-07-06T09:25:10.047Z
// console.log(myDates.toJSON());
// console.log(myDates.toLocaleDateString());//7/6/2024

// console.log(typeof(myDates));

// let createDate = new Date(2023,0,23,5,3)
// console.log(createDate.toLocaleString());//  1/23/2023, 5:03:00 AM
// let myCreateDate = new Date("18-01-2002")
// let mytimeStamp = Date.now()
// console.log(mytimeStamp);
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());


newDate.toLocaleTimeString('default',{
    weekday:'long'
})
     
}