// var c=30 // global scope
// let a = 100
// if (true){
//     let a =1
//     const b = 20 //block scope
//     var c = 300
//     console.log(" inner a",a)
// }

// // console.log("a",a) cant access let variable outside block
// // console.log("b",b) cant access const variable outside block
// console.log("c",c)  // can access var variable outside block
// console.log("global a",a)

function one(){
    const username="ayush"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website) // cant access website variable here
    two()
    console.log(username)
}
one()