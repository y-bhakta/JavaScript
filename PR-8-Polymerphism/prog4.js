function person(name, age) {
    if (age === undefined) {
        console.log(`Hello ${name}`);
    } else {
        console.log(`Hello ${name}, you are ${age} years old`);
    }
};
person("Alex");
person("Alex", 35);