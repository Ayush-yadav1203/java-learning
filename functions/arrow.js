//this function

const user={
    username:"hitesh",
    price:1446,

    welcome:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcome();
user.username="ayush";
user.welcome();
// console.log(this);
