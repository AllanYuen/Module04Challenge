// Initialize variables required to support Timed Quiz Challenge

var finalScore = document.querySelector("#finalScore");
var userInitials = document.querySelector("#userInitials");

// localStorage render high score players


// localStorage set function to save data to 'High Score Players'
// Get the submit button element
var submitBtn = document.querySelector("#submitBtn");

// Add event listener to the submit button
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the user's initials
    var initials = userInitials.value.trim();

    // Validate the user's initials
    if (initials === "") {
        alert("Please enter your initials.");
        return;
    }

    // Get the high scores from local storage
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Create a new high score object
    var newHighScore = {
        initials: initials,
        score: finalScore.textContent
    };

    // Add the new high score to the array
    highScores.push(newHighScore);

    // Sort the high scores in descending order
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    // Store the updated high scores in local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Redirect to the high scores page
    window.location.href = "highscores.html";
});