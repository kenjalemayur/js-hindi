const marvel_heros = ["mak" ,"hary", "hak"]
const dc_heros = ["hat", "cat", "mat"]
const mk_heros = ["mayur", "omkar","shubh"]

// marvel_heros.push(dc_heros)
// //console.log(marvel_heros);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...mk_heros]
console.table(all_new_heros)

const another_array = [1,2,3,[4,5,6],9,8,[4,6,6],5,7]
const real_another_array = another_array.flat(Infinity) // flat use same line array
console.log(real_another_array);


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"})); // intresting

let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1,num2,num3));