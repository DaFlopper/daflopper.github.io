// Check if it is Thursday
var today = new Date();
var dayOfWeek = today.getDay();
var isThursday = (dayOfWeek === 4); // Thursday is represented by 4 (0 = Sunday, 1 = Monday, etc.)

// Display message based on the day
var messageElement = document.getElementById("message");
if (isThursday) {
  messageElement.textContent = "Happy Thursday!! 🎊🎊";
} else {
  messageElement.textContent = "It's not Thursday yet. Hang in there!";
}
