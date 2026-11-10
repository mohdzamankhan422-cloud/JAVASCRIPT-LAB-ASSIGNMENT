/**
 * Experiment 12: Callbacks and Higher-Order Functions
 * Tasks:
 * 1. Function applyTwice(fn, val): calls fn(val), then fn on result. addTen(x) adds 10. Print applyTwice(addTen, 5)
 * 2. Function formatMarks(marks, callback): returns callback(marks). Call with 76 and (m) => "Marks: " + m + "/100"
 * 3. Function repeatAction(times, action): calls action(round) from 1 to times. Call with 3 and (round) => print "Round <round>"
 */

// Task 1: Higher-Order Function applyTwice
function applyTwice(fn, val) {
    return fn(fn(val));
}

function addTen(num) {
    return num + 10;
}

console.log(applyTwice(addTen, 5)); // (5 + 10) + 10 = 25

// Task 2: Callback function for string formatting
function formatMarks(marks, callback) {
    return callback(marks);
}

const formattedResult = formatMarks(76, (marks) => `Marks: ${marks}/100`);
console.log(formattedResult); // "Marks: 76/100"

// Task 3: Higher-Order Iteration with repeatAction
function repeatAction(times, action) {
    for (let round = 1; round <= times; round++) {
        action(round);
    }
}

repeatAction(3, (round) => {
    console.log("Round " + round);
});

