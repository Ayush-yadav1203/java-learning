//array

const myArr=[0,1,2,3,4,5]
const myheroes=['spiderman','batman','superman']

const myArr2=new Array(3,4,5)

// console.log(myArr[2])
// console.log(myheroes[1])
// console.log(myArr2)

          //array methods


// myArr.push(3)
// myheroes.push('ironman')
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// console.log(myheroes)
// myArr.unshift(9)

// console.log(myArr)
// myArr.shift() //removes first element

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr=myArr.join()
// console.log(newArr)
// console.log(myArr) 

         //slice,splice
console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr);

const myn2=myArr.splice(1,3)

console.log(myn2)
console.log("C ",myArr);