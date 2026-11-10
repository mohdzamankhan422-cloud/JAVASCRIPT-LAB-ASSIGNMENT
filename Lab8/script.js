/**
 * Experiment 8: Inheritance, Methods and Composition
 * Tasks:
 * 1. Class Person with greet() returning "Hi, I am <name>", class Teacher extends Person with subject. Create Anita (Maths) and print greeting
 * 2. Class Locker (pin 1234) with checkPin(num) returning boolean. Print checkPin(1111) and checkPin(1234)
 * 3. Composition: Engine(power) and Car(holds Engine). Car.start() returns "Car starts with <power> HP". Create Car(150), print start()
 */

// Task 1: Class Inheritance using extends and super
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

const teacher = new Teacher("Anita", "Maths");
console.log(teacher.greet());

// Task 2: Class Locker with conditional validation method
class Locker {
    constructor(pin = 1234) {
        this.pin = pin;
    }

    checkPin(enteredPin) {
        return enteredPin === this.pin;
    }
}

const locker = new Locker(1234);
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));

// Task 3: Object Composition (Car composed of an Engine)
class Engine {
    constructor(power) {
        this.power = power;
    }
}

class Car {
    constructor(power) {
        this.engine = new Engine(power);
    }

    start() {
        return `Car starts with ${this.engine.power} HP`;
    }
}

const car = new Car(150);
console.log(car.start());

