function sayName(){
    console.log("My name is ChatGPT");
    console.log("I am an AI language model");
    console.log("I can help with coding tasks");
}   
// sayName()
function add(n1,n2){
    console.log(n1 + n2);
}
// add(3,null)
// add(2,"3")
// add(5,7)
// const result=add(7,8)
// console.log("result",result) //undefined
function adds(n1,n2){
    // let result=n1+n2
    // return result
    return n1+n2
}
// const result=adds(7,8)
// console.log("result",result) //15

function login(username){
    return `${username} just logged in`
}
// console.log(login("ayush"))

function loginu(username){
    if(username===undefined)// if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginu())