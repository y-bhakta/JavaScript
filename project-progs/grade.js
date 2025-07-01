let name="Yash";
let rollno=21;
let sub1=88;
let sub2=28;
let sub3=78;
let total=sub1 + sub2 + sub3;
let avg=total/3;
console.log(`Name: ${name}`);
console.log(`Roll No: ${rollno}`);
console.log(`SUB1: ${sub1}`);
console.log(`SUB2: ${sub2}`);
console.log(`SUb3: ${sub3}`);
console.log(`Total: ${total}`);
console.log(`AVG: ${avg.toFixed(2)} %`);
if(avg>=90){
    console.log("Your grade is A+.");
}else if(avg>=80){
    console.log("Your grade is A.");
}
else if(avg>=60){
    console.log("Your grade is B.");
}else if(avg>=40){
    console.log("Your grade is C.");
}else{
    console.log("Your grade is F.");
}