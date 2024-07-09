const Name =  "Mayur"
const repoCount = 80
 //console.log(Name + repoCount);

 console.log(`my name is ${Name} my repo count is ${80}`);

 const gameName = new String ("mayur")

 //console.log(gameName[0]);
 //console.log(gameName.__proto__);
 //console.log(gameName.charAt(3));
 //console.log(gameName.indexOf('u'));

 const newString = gameName.substring(0,5)  // length of character
 console.log(newString);

 const anotheName = gameName.slice(-5,4) // cut process
 console.log(anotheName);

 const anotherOne = "    Mayur    "
 console.log(anotherOne);
 console.log(anotherOne.trim());    // space 

 const url = "https//hitesh.cm/mayur20%kenajale"   // replace
 console.log(url.replace('20%', '-'))

 console.log(url.includes("mayur"));   // questions

 console.log(gameName.split('')); // convert to array