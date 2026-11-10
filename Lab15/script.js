/**
 * Experiment 15: Promises and async/await with Local Data
 * Tasks:
 * 1. Function checkMarks(marks): resolves with marks (0-100), rejects with Error("Marks out of range"). Call with 80 and print value
 * 2. Call checkMarks(120) and print error message when rejected
 * 3. async function run(): try await checkMarks(65), await checkMarks(-5), catch prints "Caught: " + error.message. Call run()
 * 4. Function getUsers(): returns Promise resolving after 100ms with [{id:1, name:"Asha"}, {id:2, name:"Rohan"}, {id:3, name:"Meera"}].
 *    async function prints each name, then call it
 */

// Core validation Promise factory
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

// Task 1: Promise Resolution
checkMarks(80)
    .then(val => {
        console.log(val); // 80
    });

// Task 2: Promise Rejection Handling
checkMarks(120)
    .catch(err => {
        console.log(err.message); // "Marks out of range"
    });

// Task 3: async / await with try...catch
async function run() {
    try {
        const mark1 = await checkMarks(65);
        console.log(mark1); // 65
        const mark2 = await checkMarks(-5);
        console.log(mark2);
    } catch (err) {
        console.log("Caught: " + err.message); // "Caught: Marks out of range"
    }
}
run();

// Task 4: Asynchronous local data retrieval
function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ]);
        }, 100);
    });
}

async function displayUsers() {
    const users = await getUsers();
    users.forEach(user => {
        console.log(user.name);
    });
}
displayUsers();

