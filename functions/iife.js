//Immediate Invoked Function Expression (IIFE)

// ({function})();  semicolon is important

(function(){
    console.log(`DB connected`)
})();
((name)=>{
    console.log(`Server connected  ${name}`)
})('ayush');