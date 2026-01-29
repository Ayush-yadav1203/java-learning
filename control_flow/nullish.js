//nullish coalescing operator ??
let val1
val1 = null ?? 5
console.log(val1) //5
val1=22??21
console.log(val1) //22
let val2
val2=undefined ?? 15
console.log(val2) 

//ternary operator ?:
// condition ? expr1 : expr2
let age=20
let canVote= (age>=18) ? "yes you can vote" : "no you cannot vote"
console.log(canVote) //yes you can vote