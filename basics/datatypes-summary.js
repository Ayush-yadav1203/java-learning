//primitive

//7 types : String,NUMBER,BOOLEAN,NULL,UNDEFINED,SYMBOL,BIGINT


// reference (non-primitive)

//Object,ARRAY,FUNTION

const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail; //undefined

const idSymbol=Symbol("id");
const anotherIdSymbol=Symbol("id");

console.log(idSymbol===anotherIdSymbol);

const bigNumber=9007199254741991n; //bigINT
console.log(bigNumber);


const heros=["shaktiman","naagraj","doga"];
const myObj={
    name:"chinmay",
    age:23,
};
const myFunc=function(){
    console.log("hello world");
}