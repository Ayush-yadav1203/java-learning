// //primitive

// //7 types : String,NUMBER,BOOLEAN,NULL,UNDEFINED,SYMBOL,BIGINT


// // reference (non-primitive)

// //Object,ARRAY,FUNTION

// const score=100;
// const scoreValue=100.3;

// const isLoggedIn=false;
// const outsideTemp=null;
// let userEmail; //undefined

// const idSymbol=Symbol("id");
// const anotherIdSymbol=Symbol("id");

// console.log(idSymbol===anotherIdSymbol);

// const bigNumber=9007199254741991n; //bigINT
// console.log(bigNumber);


// const heros=["shaktiman","naagraj","doga"];
// const myObj={
//     name:"chinmay",
//     age:23,
// };
// const myFunc=function(){
//     console.log("hello world");
// }


// stack() //primitive
// heap() //reference

let myVariable="chinmay"

let mydata=myVariable
mydata="kumar"
console.log(myVariable);
console.log(mydata);

let user={
    email:"user@gamil.com",
    upi:"user@oksbi"
}

let usertwo=user
usertwo.email="hiteshda@gmail.com"

console.log(user.email);
console.log(usertwo.email);