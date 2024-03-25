// Header element to manage the 'View High Scores' link and the countdown timer
var headerEl = document.createElement("header");
headerEl.setAttribute("id", "header");
document.body.appendChild(headerEl);

// Append the 'View High Scores' link to the header element
var viewHighScoresEl = document.createElement("a");
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
var timerEl = document.createElement("div");
timerEl.setAttribute("id", "timer");
timerEl.textContent = "Time: 0";
timerEl.style.cssText = `
    float: right;
    margin: 20px 20px 0 0;
    font-size: 20px;
    `;
document.querySelector("#header").appendChild(timerEl);

// Container element to manage the main content of the page
var mainEl = document.createElement("main");
mainEl.setAttribute("id", "main");
document.body.appendChild(mainEl);

var sectionEl = document.createElement("section");
containerEl.setAttribute("id", "section");
document.querySelector("#main").appendChild(sectionEl);

var h1El = document.createElement("h1");
h1El.textContent = "Coding Quiz Challenge";
h1El.style.cssText = `
    text-align: center;
    margin-top: 20px;
    `;
document.querySelector("#section").appendChild(h1El);

// Variables required to support Timed Quiz Challenge

// Start Quiz button click event to trigger the timer and display the first question

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