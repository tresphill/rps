const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  // this function starts the game up
  const startGame = () => {
    const playBtn = document.querySelector(".start-btn");
    const restartBtn = document.querySelector(".restart-btn");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const winner = document.querySelector(".winner"); // this selects the winner text

    // Add event listener for restart button
    restartBtn.addEventListener("click", () => {
      // Reset scores and UI elements
      playerScore = 0;
      computerScore = 0;
      winner.textContent = "";
      document.querySelector(".player-hand").src = ""; // Clear player hand image
      document.querySelector(".computer-hand").src = ""; // Clear computer hand image
      introScreen.classList.remove("fadeOut");
      match.classList.remove("fadeIn");
      restartBtn.classList.add("hidden"); // Hide restart button again
    });

    // this is the event listener for the mouse click on buttons
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      restartBtn.classList.remove("hidden"); // Show restart button when game starts

      // calls playMatch when the game starts
      playMatch();
    });

    // defines playMatch here
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");

      // this function allows the computer to generate a random selection of moves
      const computerOptions = ["rock", "paper", "scissors"];

      options.forEach((option) => {
        option.addEventListener("click", function () {
          const computerNum = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNum];

          // updating images based on selection
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;

          // call compareHands to determine the winner
          compareHands(this.textContent, computerChoice, winner);
        });
      });
    };

    // defines the compareHands here
    const compareHands = (playerChoice, computerChoice, winner) => {
      // Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "Tie!";
        return;
      }
      // checking for rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins!";
          return;
        } else {
          winner.textContent = "Computer Wins!";
          return;
        }
      }
      // checking for paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins!";
          return;
        } else {
          winner.textContent = "Player Wins!";
          return;
        }
      }
      // checking for scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins!";
          return;
        } else {
          winner.textContent = "Player Wins!";
          return;
        }
      }
    };
  };

  // calling the startGame function
  startGame();
};

// calling the entire game function here
game();
