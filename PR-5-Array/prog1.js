let arr=["Banana", "Orange", "Apple", "Mango","Kiwi","Orange"];
let arr2=[
    {
        name: "John",
        age: 30,
        id:1
    },
    {
        name: "Doe",
        age: 28,
        id:2
    },
    {
        name: "Steve",
        age: 26,
        id:3
    },
];
arr.push("Watermelon");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("Lemon");
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(2,1,"Peach");
console.log(arr);
let s=arr.slice(0,3);
console.log(s);
console.log(arr.indexOf("Peach"));
console.log(arr.lastIndexOf("Orange"));
console.log(arr.includes("Orange"));
console.log(arr2.find((item)=> item.id===2));