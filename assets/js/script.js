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
var correctEl = document.createElement("div");
var incorrectEl = document.createElement("div");
var timeLeft = 60;
var timer;

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
timerEl.textContent = `Time: 60`;
timerEl.style.cssText = `
    float: right;
    margin: 20px 20px 0 0;
    font-size: 20px;
    `;
document.querySelector("#header").appendChild(timerEl);

// Container element to manage the main content of the page
mainEl.setAttribute("id", "main");
document.body.appendChild(mainEl);

// Section element to manage the main content of the page
sectionEl.setAttribute("id", "section");
document.querySelector("#main").appendChild(sectionEl);

// h1 element to display the title of the Coding Quiz Challenge
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

// Array to store the quiz questions
var questions = [
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

// Function to start the countdown timer
function startTimer() {
    // Set the countdown timer
    timer = setInterval(function() {
        // Update the countdown timer
        timeLeft--;
        timerEl.textContent = `Time: ${timeLeft}`;
        // Check if the countdown timer has reached zero
        if (timeLeft <= 0) {
            // End the quiz
            endQuiz();
        }
    }, 1000);
};

// Function to start the quiz
function startQuiz() {
    // Hide the start button
    startQuizBtn.style.display = "none";
    // Display the first question
    displayQuestion(questions[0]);
    // Start the countdown timer
    startTimer();
};

// Function to display a question
function displayQuestion(question) {
    // Display the question
    questionEl.textContent = question.question;
    questionEl.style.cssText = `
        text-align: center;
        margin-top: 20px;
        `;
    document.querySelector("#section").appendChild(questionEl);
    // Display the answer choices
    answerEl.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        `;
    document.querySelector("#section").appendChild(answerEl);
    answerBtn1.textContent = question.choices[0];
    answerBtn1.style.cssText = `
        margin: 10px;
        background-color: purple;
        color: white;
        `;
    answerEl.appendChild(answerBtn1);
    
    answerBtn1.addEventListener("click", function() {
        checkAnswer(0);
    }
    );

    answerBtn2.textContent = question.choices[1];
    answerBtn2.style.cssText = `
        margin: 10px;
        background-color: purple;
        color: white;
        `;
    answerEl.appendChild(answerBtn2);
    
    answerBtn2.addEventListener("click", function() {
        checkAnswer(1);
    }
    );

    answerBtn3.textContent = question.choices[2];
    answerBtn3.style.cssText = `
        margin: 10px;
        background-color: purple;
        color: white;
        `;
    answerEl.appendChild(answerBtn3);
    answerBtn3.addEventListener("click", function() {
        checkAnswer(2);
    }
    );

    answerBtn4.textContent = question.choices[3];
    answerBtn4.style.cssText = `
        margin: 10px;
        background-color: purple;
        color: white;
        `;
    answerEl.appendChild(answerBtn4);
    answerBtn4.addEventListener("click", function() {
        checkAnswer(3);
    }
    );
};

// Function to check the answer
function checkAnswer(answer) {
    for (var i = 0; i < questions.length; i++) {
        // Check if the answer is correct
        if (answer === questions[i].answer) {
            document.body.appendChild("Correct!");
            // Display the next question
            displayQuestion(questions[i+1]);
        } else {
            console.log("Incorrect!");
            // Display the next question
            if (timeLeft >= 10) {
                timeLeft -= 10;
                displayQuestion(questions[i+1]);
            } else {
                endQuiz();
            }
        }
    }
};

// Function to display the final score
function displayScore() {
    // Display the final score
    document.body.appendChild("Your final score is: " + timeLeft);
    // Display the form to enter initials
    var initials = document.createElement("input");
    initials.setAttribute("id", "initials");
    initials.setAttribute("type", "text");
    initials.setAttribute("placeholder", "Enter your initials");
    initials.style.cssText = `
        display: block;
        margin: 20px auto;
        `;
    document.body.appendChild(initials);
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.style.cssText = `
        display: block;
        margin: 20px auto;
        background-color: purple;
        color: white;
        `;
    document.body.appendChild(submitBtn);
};

// Function to end the quiz
function endQuiz() {
    // Stop the countdown timer
    clearInterval(timer);
    // Display the final score
    displayScore();
};

// Call the startQuiz function to begin the quiz
startQuizBtn.addEventListener("click", startQuiz);


// -------------------

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