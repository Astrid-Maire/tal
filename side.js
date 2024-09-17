const randomNumber = Math.floor(Math.random() * 101);
console.log("Tilfældigt nummer:", randomNumber);

function checktal() {
  const userGuess = parseInt(document.getElementById("guess").value);
  const feedbackElement = document.getElementById("feedback");

  if (isNaN(userGuess)) {
    feedbackElement.textContent = "Taste et gyldigt tal!";
    return;
  }

  if (userGuess < randomNumber) {
    feedbackElement.textContent = "Gæt er for lavt";
  } else if (userGuess > randomNumber) {
    feedbackElement.textContent = "Gæt er for højt";
  } else {
    feedbackElement.textContent = "Tillykke, Du gættede rigtigt!";
    startCelebration();
  }
}
