class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    // Method to print person's details
    printDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
  }
  
  // Student class inherits from Person
  class Student extends Person {
    constructor(name, age, gender, rollNo, course) {
      // Call parent constructor (Person)
      super(name, age, gender);
      
      // Validate roll number
      if (rollNo <= 0) {
        throw new Error('Roll number must be greater than zero');
      }
      
      this.rollNo = rollNo;
      this.course = course;
    }
    // Overriding printDetails method to include student-specific details
    printDetails() {
      super.printDetails(); // Call parent class's printDetails method
      console.log(`Roll No: ${this.rollNo}, Course: ${this.course}`);
    }
  }
  
  try {
    // Creating a valid student object
    const student1 = new Student('Alice', 20, 'Female', 123, 'Mathematics');
    student1.printDetails(); // Print student details
  
    // Creating an invalid student object (roll number is 0)
    const student2 = new Student('Bob', 22, 'Male', 0, 'Physics');
  } catch (error) {
    console.error(error.message); // Output error for invalid roll number
  }
  