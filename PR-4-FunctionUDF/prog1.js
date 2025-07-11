function printMsg(){
    console.log("Hello World! from normal function");
}
printMsg();
const msg = function (){
    console.log("Hello World! from variable function");
}
msg();
//arrow function
const msg2 = () =>{
    console.log("Hello World! from arrow functoin");
}
msg2();
// IIFE 
(()=>{
    console.log("Hello World! from IIFE(Imediately Invoke Function Expresion!)");
})();