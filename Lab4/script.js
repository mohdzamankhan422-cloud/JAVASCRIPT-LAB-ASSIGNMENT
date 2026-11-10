/**
 * Experiment 4: Writing Functions
 * Tasks:
 * 1. Function greet that takes a name and returns "Hello, <name>", print greet("Asha")
 * 2. Arrow function square that returns number * number, print square(6)
 * 3. Function billWithTax(amount, taxRate = 0.18) returning amount + amount * taxRate, print billWithTax(100)
 */

// Task 1: Function declaration with return value
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Asha"));

// Task 2: ES6 Arrow function
const square = (num) => num * num;
console.log(square(6));

// Task 3: Function with default parameter
function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}
console.log(billWithTax(100));

