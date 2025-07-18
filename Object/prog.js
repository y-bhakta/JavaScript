let obj={
    name: "Yash",
    age:20,
    city: "Navsari"
}
console.log(obj);
for(let key in obj){
    console.log(key);
}
for(let key in obj){
    console.log(obj[key]);
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));