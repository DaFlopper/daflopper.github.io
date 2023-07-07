// Unicorn name list
var unicornNames = [
  "Sparkle",
  "Rainbow",
  "Sugarplum",
  "Glitter",
  "Moonbeam",
  "Stardust",
  "Buttercup",
  "Blossom",
  "Crystal",
  "Twinkle",
  "Frosting",
  "Enchanted"
];

// Generate and display a random unicorn name
function generateName() {
  var randomIndex = Math.floor(Math.random() * unicornNames.length);
  var randomName = unicornNames[randomIndex];
  var unicornNameElement = document.getElementById("unicorn-name");
  unicornNameElement.textContent = "Your Unicorn Name: " + randomName;
}
