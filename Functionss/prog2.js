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
let num=7;
console.log(isprime(num));
let str="Hello World!";
function rev(){
    let revstr="";
    for(let i=str.length-1;i>=0;i--){
        revstr+=str[i];
    }
    return revstr;
}
let revs=console.log(rev(str));
if(str===revs){
    console.log(`It is palindrom!`);    
}else{
    console.log(`It is not palindrom!`); 
}