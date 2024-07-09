// const amazonuser = new Object() // singlton user
const amazonuser = {} //non-singlton user
amazonuser.id ="123abc"
amazonuser.name = "mayur"
amazonuser.isLoggedIn = false
//console.log(amazonuser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"mayur",
            latname:"kenjale"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const user = [
    {
        email:"mak@gmail.com",
        age:24
    },
    {
        email:"mak@gmail.com",
        age:24
    },
    {
        email:"mak@gmail.com",
        age:24
    }
]
user[1].email
// console.log(amazonuser);

// console.log(Object.keys(amazonuser));
// console.log(Object.values(amazonuser));
// console.log(Object.entries(amazonuser));

console.log(amazonuser.hasOwnProperty('isLogged'));

const course = {
    teacher: "hiteshsir",
    age:26,
    subject:"javascirpt" 

}
//course.teacher
const {teacher: sir} = course
console.log(sir);

{
    "name":"mayur",
    "age":23,          // json format
    "course":"hindi"
}
