let scores = [85, 72, 91, 64, 78];

let total = 0;
let passed = 0;
let failed = 0;
let highest = scores[0];
let lowest = scores[0];

console.log("Student Scores:");

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);

    total += scores[i];

    if (scores[i] >= 75) {
        passed++;
    } else {
        failed++;
    }

    if (scores[i] > highest) {
        highest = scores[i];
    }

    if (scores[i] < lowest) {
        lowest = scores[i];
    }
} 

console.log(" ");

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        console.log("Student " + (i + 1) + ": " + scores[i] + " - Excellent - Passed");
    } else if (scores[i] >= 80) {
        console.log("Student " + (i + 1) + ": " + scores[i] + " - Very Good - Passed");
    } else if (scores[i] >= 75) {
        console.log("Student " + (i + 1) + ": " + scores[i] + " - Good - Passed");
    } else {
        console.log("Student " + (i + 1) + ": " + scores[i] + " - Failed");
    }
}

let average = total / scores.length;

console.log(" ");
console.log("Total score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);