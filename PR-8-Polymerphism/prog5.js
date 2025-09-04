class Animal {
    speak() {
        console.log("This animal makes a sound");
    }
};
class Dog extends Animal {
    speak() {
        console.log("Dog barks.");
    }
};
class Cat extends Animal {
    speak() {
        console.log("Cat meows.");
    }
};
class Cow extends Animal {
    speak() {
        console.log("Cow moo.");
    }
};
let animals = [new Animal(), new Dog(), new Cat(), new Cow()];
animals.forEach(animal => {
    animal.speak();
});