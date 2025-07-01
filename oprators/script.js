let add=document.querySelector("#Add");
let sub=document.querySelector("#sub");
let mul=document.querySelector("#mul");
let div=document.querySelector("#div");
let mod=document.querySelector("#mod");
let A=document.querySelector("#A").innerText="10";
let B=document.querySelector("#B").innerText="5";
let a=10;
let b=5;
// Performing arithmetic operations
console.log("Addition: "+(a+b));
console.log("Subtraction: "+(a-b));
console.log("Multiplication: "+(a*b));
console.log("Division: "+(a/b));
console.log("Modulus: "+(a%b));

sub.innerHTML="Subtraction: "+(a-b);
mul.innerHTML="Multiplication: "+(a*b);
div.innerHTML="Division: "+(a/b);
mod.innerHTML="Modulus: "+(a%b);
Add.innerHTML="Addition: "+(a+b);

//Assignment Operators
console.log(a+=b); 
console.log(a-=b); 
console.log(a*=b); 
console.log(a/=b); 
console.log(a%=b); 
console.log(a**b); 

// Comparison Operators
console.log("Comparison Operators:");
console.log(a==b); 
console.log(a!=b); 
console.log(a===b);
console.log(a!==b);
console.log(a>b); 
console.log(a<b); 
console.log(a>=b); 
console.log(a<=b); 

// Logical Operators
console.log("Logical Operators:");
console.log(a>b && a<b);
console.log(a>b || a<b);
console.log(!(a>b));