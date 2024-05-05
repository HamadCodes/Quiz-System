#! /usr/bin/env node
import inquirer from "inquirer";
let correctAnswers = 0;
let totalQuestions = 5;
let question1 = await inquirer.prompt([
    { message: "What comes after 1?", type: "list", choices: [3, 2, 4, 5], name: "answer" }
]);
if (question1.answer == 2) {
    correctAnswers++;
}
let question2 = await inquirer.prompt([
    { message: "What comes after A?", type: "list", choices: ["F", "C", "D", "B"], name: "answer" }
]);
if (question2.answer == "B") {
    correctAnswers++;
}
let question3 = await inquirer.prompt([
    { message: "How many minutes in a hour?", type: "list", choices: [90, 70, 80, 60], name: "answer" }
]);
if (question3.answer == 60) {
    correctAnswers++;
}
let question4 = await inquirer.prompt([
    { message: "How many days in a week?", type: "list", choices: [6, 3, 7, 5], name: "answer" }
]);
if (question4.answer == 7) {
    correctAnswers++;
}
let question5 = await inquirer.prompt([
    { message: "How many days in a month?", type: "list", choices: [20, 30, 40, 50], name: "answer" }
]);
if (question5.answer == 30) {
    correctAnswers++;
}
console.log(`\nYou have answered ${correctAnswers} questions correct out of ${totalQuestions} questions.\n`);
