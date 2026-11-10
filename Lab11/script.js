/**
 * Experiment 11: Scope and Closures
 * Tasks:
 * 1. Variable level = "outer", inside block { let level = "inner"; print }, outside print level
 * 2. Function makeCounter: count = 0, returns function adding 1 to count and returning it. Call twice and print each
 * 3. Global school = "Sample College", function showSchool prints "Welcome to <school>", call showSchool
 */

// Task 1: Block Scope vs Outer Scope (Variable Shadowing)
let level = "outer";
{
    let level = "inner";
    console.log(level); // "inner"
}
console.log(level);     // "outer"

// Task 2: Closures with makeCounter
function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Task 3: Global Scope Lexical Lookup
let school = "Sample College";

function showSchool() {
    console.log("Welcome to " + school);
}

showSchool(); // "Welcome to Sample College"

