// Calculate the countdown to Thursday
function calculateCountdown() {
  var today = new Date();
  var currentDay = today.getDay();
  var daysUntilThursday = (11 - currentDay) % 7; // Thursday is represented by 4 (0 = Sunday, 1 = Monday, etc.)

  // Display countdown if it's not Thursday yet
  var countdownElement = document.getElementById("countdown");
  if (daysUntilThursday > 0) {
    countdownElement.textContent = "Countdown to Thursday: " + daysUntilThursday + " days";
  } else {
    countdownElement.textContent = "It's Thursday today!";
  }
}

// Display message based on the day
function displayMessage() {
  var today = new Date();
  var currentDay = today.getDay();

  var messageElement = document.getElementById("message");
  if (currentDay === 4) {
    messageElement.textContent = "Happy Thursday!! 🎊🎊";
  } else {
    messageElement.textContent = "It's not Thursday yet. Hang in there!";
  }
}

// Update countdown and message on page load
calculateCountdown();
displayMessage();

