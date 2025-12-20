//dates

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON()); 

// //console.log(typeof myDate);
// let create=new Date(2025,0,23);
//console.log(create.toDateString());

// let Create=new Date("01-14-2023");
// let datestamp= Date.now()
// console.log(datestamp);
// console.log(create.getTime())

let newDate=new Date();
console.log(newDate.toLocaleString('default',{
    weekday:'short',
    year:'2-digit',
    month:'long',
    day:'numeric'       
}))