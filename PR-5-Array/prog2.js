let arr = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Orange"];
console.log(arr);
let arr2= arr.map((item)=>{
    return item.toUpperCase();   
});
console.log("Map Method: ");
console.log(arr2);
let arr3 = arr.filter((item)=>{
    return item.includes("a");
});
console.log("Filter Method: ");
console.log(arr3);
console.log("ForEach Method: ");
let arr4= arr.forEach((item)=>{
    console.log(item.toLowerCase());        
});
console.log("Some Method: ");
console.log(arr.some((item)=>{
    return item==="Kiwi";
}));
console.log("Every Method: ");
console.log(arr.every((item)=>{
    return item!=="Watermelon";
}));