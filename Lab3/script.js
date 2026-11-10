/**
 * Experiment 3: Conditions and Loops
 * Tasks:
 * 1. Grade categorization based on marks 72 (>=75: Grade A, >=60: Grade B, else: Grade C)
 * 2. for loop printing numbers 1 to 5
 * 3. while loop summing 1, 2, 3... until total > 20, then print total
 */

// Task 1: Conditional grading system
let marks = 72;

if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// Task 2: for loop printing 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Task 3: while loop accumulating sum until total > 20
let total = 0;
let current = 1;

while (total <= 20) {
    total += current;
    current++;
}

console.log(total);

