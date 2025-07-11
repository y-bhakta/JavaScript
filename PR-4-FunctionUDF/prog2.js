// Prime Number Function
function isprime(n){
    let i=1;
    let count=0;
    if(n<=1) return false;
    while(i<=n){
        if(n%i===0){
            count++;
        }
        i++;
    }
    if(count==2) return true;
    return false;
}
let num=29;
if(isprime(num)){
    console.log(`${num} is the prime number`);    
}else{
    console.log(`${num} is not the prime number`); 
}