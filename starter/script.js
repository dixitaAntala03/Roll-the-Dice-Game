let random;
let activePlayer = 0; // 0 for Player 1, 1 for Player 2

function rollDice() {
  random = Math.floor((Math.random() * 6) + 1);
  
  let dice = document.getElementById("diceimg");
  dice.src = `dice-${random}.png`;

  if (activePlayer === 0) {
    player1();
  } else {
    player2();
  }
}

function player1() {
  let player1ScoreElement = document.getElementById("score--0");
  let player1CurrentScoreElement = document.getElementById("current--0");

  let player1Score = parseInt(player1ScoreElement.innerText);
  let player1CurrentScore = parseInt(player1CurrentScoreElement.innerText);

  if(player1Score < 100) {
    if (random == 1) {
      player1CurrentScore = 0;
      player1CurrentScoreElement.innerText = player1CurrentScore;
      switchPlayer();        
    } else {
      player1CurrentScore += random;
      player1CurrentScoreElement.innerText = player1CurrentScore;
    }
  }

  if(player1Score >= 100) {
    document.getElementsByClassName("btn--roll")[0].setAttribute('disabled', true);
    alert(`${document.getElementById("name--0").innerText} wins!`);
  }
}

function player2() {
  let player2ScoreElement = document.getElementById("score--1");
  let player2CurrentScoreElement = document.getElementById("current--1");

  let player2Score = parseInt(player2ScoreElement.innerText);
  let player2CurrentScore = parseInt(player2CurrentScoreElement.innerText);

  if(player2Score < 100) {
    if (random == 1) {
      player2CurrentScore = 0;
      player2CurrentScoreElement.innerText = player2CurrentScore;
      switchPlayer();
    } else {
      player2CurrentScore += random;
      player2CurrentScoreElement.innerText = player2CurrentScore;
    }
  }

  if(player2Score >= 100) {
    document.getElementsByClassName("btn--roll")[0].setAttribute('disabled', true);
    alert(`${document.getElementById("name--1").innerText} wins!`);
  }
}

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;

  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  document.querySelector(`.player--${activePlayer === 0 ? 1 : 0}`).classList.remove('player--active');
}

function resetGame() {
  activePlayer = 0;
  document.getElementById("score--0").innerText = '0';
  document.getElementById("current--0").innerText = '0';
  document.getElementById("score--1").innerText = '0';
  document.getElementById("current--1").innerText = '0';
  alert("Game has been reset. Player 1 starts.");

  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.getElementsByClassName("btn--roll")[0].removeAttribute('disabled');
}

function holdScore() {
  if (activePlayer === 0) {
    let player1ScoreElement = document.getElementById("score--0");
    let player1CurrentScoreElement = document.getElementById("current--0");

    let player1Score = parseInt(player1ScoreElement.innerText);
    let player1CurrentScore = parseInt(player1CurrentScoreElement.innerText);

    player1Score += player1CurrentScore;
    player1ScoreElement.innerText = player1Score;
    player1CurrentScore = 0;
    player1CurrentScoreElement.innerText = player1CurrentScore;

    if (player1Score >= 100) {
      alert(`${document.getElementById("name--0").innerText} wins!`);
      document.getElementsByClassName("btn--roll")[0].setAttribute('disabled', true);
      return;
    }
  } else {
    let player2ScoreElement = document.getElementById("score--1");
    let player2CurrentScoreElement = document.getElementById("current--1");

    let player2Score = parseInt(player2ScoreElement.innerText);
    let player2CurrentScore = parseInt(player2CurrentScoreElement.innerText);

    player2Score += player2CurrentScore;
    player2ScoreElement.innerText = player2Score;
    player2CurrentScore = 0;
    player2CurrentScoreElement.innerText = player2CurrentScore;

    if (player2Score >= 100) {
      alert(`${document.getElementById("name--1").innerText} wins!`);
      document.getElementsByClassName("btn--roll")[0].setAttribute('disabled', true);
      return;
    }
  }
  switchPlayer();
}
