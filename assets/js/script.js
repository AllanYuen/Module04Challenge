// Defining variables to support the Timed Quiz Challenge
var headerEl = document.createElement("header");
var viewHighScoresEl = document.createElement("a");
var timerEl = document.createElement("div");
var mainEl = document.createElement("main");
var sectionEl = document.createElement("section");
var h1El = document.createElement("h1");
var startQuizBtn = document.createElement("button");
var questionEl = document.createElement("div");
var answerEl = document.createElement("div");
var answerBtn1 = document.createElement("button");
var answerBtn2 = document.createElement("button");
var answerBtn3 = document.createElement("button");
var answerBtn4 = document.createElement("button");

// Array to store the quiz questions
const questions = [
    {
        question: "Question 1: Commonly used data types DO not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: 2
    },
    {
        question: "Question 2: The condition in an if / else statement is enclosed with ____",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: 2
    },
    {
        question: "Question 3: Arrays in JavaScript can be used to store _____",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3
    },
    {
        question: "Question 4: String values must be enclosed within _____ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: 2
    },
    {
        question: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: 3
    },
];

// Function to start the quiz
function startQuiz() {};

// Function to display a question
function displayQuestion(question) {};

// Function to check the answer
function checkAnswer(answer) {};

// Function to end the quiz
function endQuiz() {};

// Call the startQuiz function to begin the quiz
startQuiz();

// Header element to manage the 'View High Scores' link and the countdown timer
headerEl.setAttribute("id", "header");
document.body.appendChild(headerEl);

// Append the 'View High Scores' link to the header element
viewHighScoresEl.setAttribute("id", "view-high-scores");
viewHighScoresEl.textContent = "View High Scores";
viewHighScoresEl.style.cssText = `
    float: left;
    margin: 20px 0 0 20px;
    text-decoration: none;
    color: magenta;
    font-size: 20px;
    `;
document.querySelector("#header").appendChild(viewHighScoresEl);

// Append the countdown timer to the header element
timerEl.setAttribute("id", "timer");
timerEl.textContent = `Time: 0`;
timerEl.style.cssText = `
    float: right;
    margin: 20px 20px 0 0;
    font-size: 20px;
    `;
document.querySelector("#header").appendChild(timerEl);

// Container element to manage the main content of the page
mainEl.setAttribute("id", "main");
document.body.appendChild(mainEl);

sectionEl.setAttribute("id", "section");
document.querySelector("#main").appendChild(sectionEl);

h1El.setAttribute("id", "h1");
h1El.textContent = "Coding Quiz Challenge";
h1El.style.cssText = `
    text-align: center;
    margin-top: 20px;
    padding-top: 75px;
    `;
document.querySelector("#section").appendChild(h1El);

// Start Quiz button click event to trigger the timer and display the first question
startQuizBtn.setAttribute("id", "start-quiz");
startQuizBtn.textContent = "Start Quiz";
startQuizBtn.style.cssText = `
    display: block;
    margin: 20px auto;
    background-color: purple;
    color: white;
    `;
document.querySelector("#section").appendChild(startQuizBtn);



// -------------------

// The following function renders items 

// localStorage render high score players

// localStorage set function to save data to 'High Score Players'

// Get the submit button element

// Add event listener to the submit button

// Get the user's initials

// Validate the user's initials

// Get the high scores from local storage

// Create a new high score object

// Add the new high score to the array

// Sort the high scores in descending order

// Store the updated high scores in local storage

// Redirect to the high scores page