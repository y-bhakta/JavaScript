//Factorial Function
const fact = (num)=>{
    if(num<=1) return 1;
    return num * fact(num-1);
}
let num = 5;
console.log(`Factorial of ${num} is:  ${fact(num)}`);