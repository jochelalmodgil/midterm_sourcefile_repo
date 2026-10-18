// Student Class
class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    // Method to compute average
    getAverage() {
        let total = 0;

        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }

        return total / this.scores.length;
    }

    // Method to determine letter grade
    getLetterGrade() {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

// Function to analyze class
function analyzeClass(students) {
    let classTotal = 0;
    let topStudent = "";
    let highestAverage = 0;

    console.log("------- STUDENT REPORT -------");

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let average = student.getAverage();
        let grade = student.getLetterGrade();

        console.log(
            `${student.name} - Average: ${average.toFixed(1)} | Grade: ${grade}`
        );

        classTotal += average;

        if (average > highestAverage) {
            highestAverage = average;
            topStudent = student.name;
        }
    }

    let classAverage = classTotal / students.length;

    console.log("-----------------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(
        `Top Student: ${topStudent} with ${highestAverage.toFixed(1)}`
    );
}

// Test Data
const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

// Create Student Objects
let students = [];

for (let i = 0; i < studentData.length; i++) {
    students[i] = new Student(
        studentData[i].name,
        studentData[i].scores
    );
}

// Run Program
analyzeClass(students);