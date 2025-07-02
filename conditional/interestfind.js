let amount=500000;
let year=5;
let interest;
if(amount>=500000 && year>=5){
    interest = amount*0.07;
}else if(amount>=300000 && year>=3){
    interest = amount*0.05;
}else if(amount>=200000 && year>=3){
    interest = amount*0.042;
}else{
    interest=amount*0.025;
}
let netamount=amount+interest;
console.log(`Amount To Invest: ${amount}`);
console.log(`Year To Invest: ${year}`);
console.log(`Net Amount: ${net}`);