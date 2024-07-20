document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    // Roll three dice
    const dice1 = getRandomNumber();
    const dice2 = getRandomNumber();
    const dice3 = getRandomNumber();

    // Display the results
    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;
    document.getElementById('dice3').textContent = dice3;

    // Determine the winner
    const scores = [dice1, dice2, dice3];
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);

    // Set colors based on the scores
    setColor('dice1', dice1, maxScore, minScore);
    setColor('dice2', dice2, maxScore, minScore);
    setColor('dice3', dice3, maxScore, minScore);

    // Display the winner
    displayWinner(scores);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function setColor(diceId, score, maxScore, minScore) {
    const element = document.getElementById(diceId);
    if (score === maxScore) {
        element.style.backgroundColor = 'green';
    } else if (score === minScore) {
        element.style.backgroundColor = 'red';
    } else {
        element.style.backgroundColor = 'yellow';
    }

    if (score === maxScore && maxScore === minScore) {
        element.style.backgroundColor = 'blue';
    }
}

function displayWinner(scores) {
    const winner = document.getElementById('winner');
    const maxScore = Math.max(...scores);
    const winners = scores.map((score, index) => score === maxScore ? index + 1 : null).filter(index => index !== null);

    if (winners.length > 1) {
        winner.textContent = 'It\'s a draw!';
    } else {
        winner.textContent = `Member ${winners[0]} wins!`;
    }
}
