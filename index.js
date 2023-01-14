// Get the array of img elements
const img = document.querySelectorAll("img");

// Player 1
const randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
const randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
img[0].setAttribute("src", randomDiceImage1);

// Player 2
const randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
const randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
img[1].setAttribute("src", randomDiceImage2);

// Deciding the winner
const heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "⛳️ Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins! ⛳";
}
else {
    heading.innerHTML = "Draw!";
}
