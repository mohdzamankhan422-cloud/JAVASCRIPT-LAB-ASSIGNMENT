/**
 * Experiment 5: Arrays, Array Methods and Nested Arrays
 * Tasks:
 * 1. Array marks = [72, 85, 64, 90], print number of items and first mark
 * 2. Array subjects = ["Maths", "Science", "English"], use forEach to print each
 * 3. Array marks = [72, 85, 45, 90], use filter to make new array >= 60 and print
 * 4. Nested array grid = [[1, 2, 3], [4, 5, 6]], print row 2, col 3 element
 */

// Task 1: Array length and element indexing
const marks = [72, 85, 64, 90];
console.log(marks.length); // 4
console.log(marks[0]);      // 72

// Task 2: Iteration with forEach
const subjects = ["Maths", "Science", "English"];
subjects.forEach(subject => {
    console.log(subject);
});

// Task 3: Filtering elements with filter()
const scores = [72, 85, 45, 90];
const passingScores = scores.filter(score => score >= 60);
console.log(passingScores);

// Task 4: Nested 2D array (Grid)
const grid = [
    [1, 2, 3],
    [4, 5, 6]
];
// Row 2, Column 3 corresponds to index [1][2]
console.log(grid[1][2]); // 6

