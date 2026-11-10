/**
 * Experiment 13: Reduce, Some, Every and Map
 * Tasks:
 * 1. Array prices = [120, 45, 300], use reduce() starting from 0, print total (465)
 * 2. Array marks = [72, 85, 30, 90], some() check if any < 40, every() check if all >= 35. Print both
 * 3. Array marks = [72, 85, 64, 90], map() to add 5 to each, print new array then original array (unchanged)
 */

// Task 1: Array.prototype.reduce
const prices = [120, 45, 300];
const totalPrice = prices.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice;
}, 0);

console.log(totalPrice); // 465

// Task 2: Array.prototype.some and Array.prototype.every
const studentMarks = [72, 85, 30, 90];
const hasFailingMark = studentMarks.some(mark => mark < 40);
const allAbove35 = studentMarks.every(mark => mark >= 35);

console.log(hasFailingMark); // true (since 30 < 40)
console.log(allAbove35);     // false (since 30 is not >= 35)

// Task 3: Array.prototype.map and immutability verification
const initialMarks = [72, 85, 64, 90];
const incrementedMarks = initialMarks.map(mark => mark + 5);

console.log(incrementedMarks); // [77, 90, 69, 95]
console.log(initialMarks);     // [72, 85, 64, 90] (original unchanged)

