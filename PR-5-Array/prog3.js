let item=["Banana", "Orange", "Apple"];
let item2=["Mango", "Kiwi", "Orange"];
console.log(item);
console.log(item2);
console.log("Concat Method: ");
console.log(item.concat(item2));
console.log("join Method: ");
console.log(item.concat(item2).join(", "));
console.log("Spread Operator: ");
let arr2=[...item,"Watermelon",...item2,"Papaya"];
console.log(arr2);
console.log("Sort Method:");
console.log(arr2.sort());
console.log("revers Method:");
console.log(arr2.reverse());
let a=arr2.keys();
console.log("Keys Method:");
for(let val of a){
    console.log(val);    
}