let name='Yash';
let b_salary=30000;
let hra=b_salary*0.5;
let ma=b_salary*0.05;
let ta=b_salary*0.15;
let da=b_salary*0.2;
let pf=b_salary*0.15;
let pt=200;
let exp=3;
let bonus=0;
let net=b_salary+hra+ma+ta+da-pf-pt;
if(exp>=5 && net>=50000){
    bonus=b_salary*0.15;
    net=net+bonus;
}else if(exp>=3 && net>=30000){
    bonus=b_salary*0.1;
    net=net+bonus;
}else{
    bonus=0;
    net=net+bonus;
}
console.log(`Name: ${name}`);
console.log(`Basic Salary: ${b_salary}`);
console.log(`HRA: ${hra}`);
console.log(`MA: ${ma}`);
console.log(`TA: ${ta}`);
console.log(`DA: ${da}`);
console.log(`PF: ${pf}`);
console.log(`PT: ${pt}`);
console.log(`Expireance: ${exp}`);
console.log(`Bonus: ${bonus}`);
console.log(`Net Salary: ${net}`);