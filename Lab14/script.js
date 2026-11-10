/**
 * Experiment 14: Timers and Intervals
 * Tasks:
 * 1. Print "Start", schedule "Timer done" with setTimeout(..., 0), print "End". Observe execution order
 * 2. Schedule "Not shown" with setTimeout(..., 1000), save id, cancel with clearTimeout(id), print "Cancelled"
 * 3. Use setInterval to print "Tick <count>" every 200ms, stop with clearInterval when count reaches 3
 */

// Task 1: Asynchronous execution queue with setTimeout
console.log("Start");
setTimeout(() => {
    console.log("Timer done");
}, 0);
console.log("End");

// Task 2: Cancelling scheduled timer using clearTimeout
const timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");

// Task 3: Repeating interval with setInterval and termination via clearInterval
let tickCount = 0;
const intervalId = setInterval(() => {
    tickCount++;
    console.log("Tick " + tickCount);
    if (tickCount === 3) {
        clearInterval(intervalId);
    }
}, 200);

