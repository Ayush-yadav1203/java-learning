// object singleton


const tinderUser = new Object()
tinderUser.name = "John Doe"
tinderUser.id="123abc"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
const regularuser={
    email:"user@gmail.com",
    fullname:{
        fname:"john",
        lname:"doe"
    }
}
// console.log(regularuser.fullname);

// console.log(regularuser.fullname.fname);

// console.log(regularuser.fullname.lname);
const ob1={1:"A",2:"b"}
const ob2={3:"c",4:"d"}
// const obj3={ob1,ob2}
// const obj3=Object.assign({},ob1,ob2)
const obj3={...ob1,...ob2}
// console.log(obj3);
