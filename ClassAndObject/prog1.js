class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log("Person Constructor Called");        
    }
    Eat(){
        console.log("Paerson can eat");        
    }
    Sleep(){
        console.log("Paerson can eat");        
    }
};
class Employee extends Person{
    constructor(name,age,work){
        super(name,age);
        this.work=work;
        console.log("Employee Constructor Called");        
    }
}
let e1=new Employee("Yash",20,"IS Manager");
console.log(e1);