// ##### Exercises Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
// 2. Create a Dog and Cat child class from the Animal Class.

class Animal {  
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getFull() { return `this ${this.name} have a ${this.age} years and have a color ${this.color} && ${this.legs} legs`; }
}
let Dog = new Animal('dogi', 2, 'black', 4);
let Cat = new Animal('cat', 3, 'blue', 4);
console.log(Dog.getFull());