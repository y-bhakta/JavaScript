let obj={
    name: "Yash",
    age:20,
    id: 101,
    address:{
        city:"Navsari",
        State:"Gujarat",
        Country:"India"
    },
    PrintData: function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.id);        
    }
}
obj.lastname="Bhakta";
obj.PrintData();
console.log(obj);
for(let key in obj){
    if(typeof obj[key]==='object'){
        for(let key2 in obj[key]){
            console.log(key2);            
        }
    }else{
        console.log(key);
    }
}
for(let key in obj){
    if(typeof obj[key]==='object'){
        for(let key2 in obj[key]){
            console.log(obj[key][key2]);            
        }
    }else{
        console.log(obj[key]);
    }
}