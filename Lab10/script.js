/**
 * Experiment 10: Objects and Destructuring
 * Tasks:
 * 1. Object student { name: "Rohan", roll: 12, marks: 78 }, print name, update marks to 81, print marks
 * 2. Array ["Maths", "Science", "English"], array destructuring into first and second, print each
 * 3. Object { name: "Rohan", roll: 12, marks: 81 }, object destructuring for name and roll, print each
 */

// Task 1: Object properties and property mutation
const student1 = {
    name: "Rohan",
    roll: 12,
    marks: 78
};

console.log(student1.name);  // "Rohan"
student1.marks = 81;
console.log(student1.marks); // 81

// Task 2: Array Destructuring
const subjects = ["Maths", "Science", "English"];
const [first, second] = subjects;

console.log(first);  // "Maths"
console.log(second); // "Science"

// Task 3: Object Destructuring
const student2 = {
    name: "Rohan",
    roll: 12,
    marks: 81
};

const { name, roll } = student2;
console.log(name); // "Rohan"
console.log(roll); // 12

