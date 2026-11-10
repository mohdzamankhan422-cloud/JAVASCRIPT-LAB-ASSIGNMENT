/**
 * Experiment 6: JSON Text
 * Tasks:
 * 1. Object { name: "Rohan", marks: [70, 80] }, convert to JSON with JSON.stringify and print
 * 2. Store '{"city":"Pune","pin":411001}', parse with JSON.parse and print city
 * 3. Store '{name: Rohan}', parse inside try/catch, print "Invalid JSON" in catch block
 */

// Task 1: Object to JSON serialization
const student = {
    name: "Rohan",
    marks: [70, 80]
};
const jsonString = JSON.stringify(student);
console.log(jsonString);

// Task 2: JSON deserialization to JavaScript object
const jsonText = '{"city":"Pune","pin":411001}';
const parsedObject = JSON.parse(jsonText);
console.log(parsedObject.city);

// Task 3: Exception handling for malformed JSON
const invalidJsonText = "{name: Rohan}";
try {
    JSON.parse(invalidJsonText);
} catch (error) {
    console.log("Invalid JSON");
}

