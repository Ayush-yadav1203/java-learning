//singleton =constructor function that always returns the same instance


//object literal syntax
// Object.create  --> object declataration
const mysymbol=Symbol("key1")
const Jsuser={
    name:"Ravi",
    "full name":"Ravi Kumar",
    [mysymbol]:"myol",
    age:18,
    location:"India",
    email:"sdghagd@gmail.com",
    Lastlogin:["monday","sunday"]
}
// // console.log(Jsuser)
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["age"])
// console.log(Jsuser.Lastlogin)
// console.log(Jsuser["full name"])
// console.log(typeof Jsuser)
// console.log(Jsuser[mysymbol])
// console.log(typeof Jsuser.mysymbol)
// console.log(Jsuser)
// Jsuser.age=19
// Object.freeze(Jsuser)
// Jsuser.age=25
// console.log(Jsuser.age)
// Jsuser.greeting=function(){
//     console.log("hello js user");
// }
// console.log(Jsuser.greeting);
Jsuser.greetin2=function(){
    console.log(`hello js,${this.name}`);
}
console.log(Jsuser.greetin2())