//this function

// const user={
//     username:"hitesh",
//     price:1446,

//     welcome:function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }
// user.welcome();
// user.username="ayush";
// user.welcome();
// // console.log(this);


// function chai(){
//     let user="hitesh"
//     console.log(this.user);
// }
// chai()

const chai=()=>{
    let user="hitesh"
    // console.log(this.user);
    console.log(user);
}
// chai() 

//arrow function
// ()=>{} 
// const add=(n1,n2)=>{
//     return n1+n2
// }
// console.log(add(4,5));

// const add=(n1,n2)=> (n1+n2)  //implicit return

const add=(n1,n2)=> ({username:"hitesh", price:1446})
console.log(add(7,5));