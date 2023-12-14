/* sophisicated_code.js */

// An elaborate and complex JavaScript code that demonstrates various concepts and techniques

// Define a class to represent a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to introduce the person
  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Method to calculate the year of birth
  getYearOfBirth() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

// Define derived classes from Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  // Override the introduce method
  introduce() {
    console.log(`Hello, I'm ${this.name}, ${this.age} years old, and majoring in ${this.major}.`);
  }

  // Method to calculate the expected graduation year of the student
  getExpectedGraduationYear() {
    const currentYear = new Date().getFullYear();
    return currentYear + (4 - this.age);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Override the introduce method
  introduce() {
    console.log(`Hello, I'm ${this.name}, ${this.age} years old, and I teach ${this.subject}.`);
  }
}

// Create instances of Person, Student, and Teacher classes
const john = new Person("John Doe", 25);
const jane = new Student("Jane Smith", 20, "Computer Science");
const mrSmith = new Teacher("Mr. Smith", 35, "Mathematics");

// Call the introduce method on each instance
john.introduce();
jane.introduce();
mrSmith.introduce();

// Call additional methods
console.log(`John was born in ${john.getYearOfBirth()}`);
console.log(`Jane is expected to graduate in ${jane.getExpectedGraduationYear()}`);