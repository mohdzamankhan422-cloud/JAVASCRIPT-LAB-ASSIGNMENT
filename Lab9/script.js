/**
 * Experiment 9: DOM, Validation, Storage and Quiz
 * Tasks:
 * 1. Heading "Welcome", click button "Change text" -> heading becomes "Button clicked"
 * 2. Function validateForm(name) returning list of errors, adds "Name is required" when empty. Print for "Asha" and ""
 * 3. Text box and Save button: saves to localStorage under key "note". Loads saved note on page open
 * 4. Question "What is 2 + 3?", radios 4, 5, 6, "Check answer" button shows "Correct" for 5, else "Try again"
 */

// Task 1: DOM Event Handling
const mainHeading = document.getElementById("main-heading");
const changeBtn = document.getElementById("change-btn");

if (changeBtn && mainHeading) {
    changeBtn.addEventListener("click", () => {
        mainHeading.textContent = "Button clicked";
        console.log("Heading changed to: Button clicked");
    });
}

// Task 2: Form Validation Function
function validateForm(name) {
    const errors = [];
    if (!name || name.trim() === "") {
        errors.push("Name is required");
    }
    return errors;
}

console.log(validateForm("Asha")); // []
console.log(validateForm(""));     // ["Name is required"]

// Task 3: Local Storage Note Saver
const noteBox = document.getElementById("note-box");
const saveBtn = document.getElementById("save-btn");
const storageStatus = document.getElementById("storage-status");

if (noteBox && saveBtn) {
    // Populate with existing note if available
    const savedNote = localStorage.getItem("note") || "Study JavaScript Labs";
    noteBox.value = savedNote;
    console.log("Loaded note from localStorage: " + savedNote);
    if (storageStatus) {
        storageStatus.textContent = "Current stored note: " + savedNote;
    }

    saveBtn.addEventListener("click", () => {
        localStorage.setItem("note", noteBox.value);
        console.log("Saved note: " + noteBox.value);
        if (storageStatus) {
            storageStatus.textContent = "Saved to localStorage successfully!";
        }
    });
}

// Task 4: Interactive Quiz Logic
const checkAnswerBtn = document.getElementById("check-answer-btn");
const quizResult = document.getElementById("quiz-result");

if (checkAnswerBtn && quizResult) {
    checkAnswerBtn.addEventListener("click", () => {
        const selected = document.querySelector('input[name="quiz"]:checked');
        if (selected && selected.value === "5") {
            quizResult.textContent = "Correct";
            quizResult.style.color = "#188038";
            console.log("Quiz answer checked: Correct");
        } else {
            quizResult.textContent = "Try again";
            quizResult.style.color = "#d93025";
            console.log("Quiz answer checked: Try again");
        }
    });
}

