/**
 * Experiment 7: Constructor Functions and Classes
 * Tasks:
 * 1. Constructor function Student(name, marks), instantiate Asha (88), print name and marks
 * 2. ES6 class Book(title, pages) with summary() method returning "<title> has <pages> pages"
 * 3. Add method result() to Student.prototype (>=40 ? "Pass" : "Fail"), print Asha's result
 */

// Task 1: Constructor Function
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

const student1 = new Student("Asha", 88);
console.log(student1.name);
console.log(student1.marks);

// Task 2: ES6 Class Book
class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return `${this.title} has ${this.pages} pages`;
    }
}

const book1 = new Book("Algorithms", 320);
console.log(book1.summary());

// Task 3: Prototype Method Extension
Student.prototype.result = function() {
    return this.marks >= 40 ? "Pass" : "Fail";
};

const student2 = new Student("Asha", 88);
console.log(student2.result());

