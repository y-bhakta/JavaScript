// Reverse String And String Palindrom
let str="Hello World!";
console.log(str);
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