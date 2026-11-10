/**
 * Experiment 2: Operators, Type Conversion and a Calculator
 * Tasks:
 * 1. Arithmetic operators on values 17 and 5 (sum, diff, product, quotient)
 * 2. Type conversions: text "12" to number + 5, number 7 to text + "3"
 * 3. Calculator with numbers 8 and 4 using if / else if with operator '+' then '-'
 */

// Task 1: Arithmetic operators
const val1 = 17;
const val2 = 5;
console.log(val1 + val2); // Sum: 22
console.log(val1 - val2); // Difference: 12
console.log(val1 * val2); // Product: 85
console.log(val1 / val2); // Quotient: 3.4

// Task 2: Type conversion
const strVal = "12";
const convertedNum = Number(strVal);
console.log(convertedNum + 5); // 17

const numVal = 7;
const convertedStr = String(numVal);
console.log(convertedStr + "3"); // "73"

// Task 3: Basic Calculator using conditional statements
let numA = 8;
let numB = 4;
let op = "+";

function runCalculator(a, b, operator) {
    if (operator === "+") {
        console.log(a + b);
    } else if (operator === "-") {
        console.log(a - b);
    }
}

// First run with operator '+'
runCalculator(numA, numB, op);

// Change operator to '-' and repeat check
op = "-";
runCalculator(numA, numB, op);

