export const calculateRoundWinner = (playerOneChoice, playerTwoChoice) => {
    if (playerOneChoice === playerTwoChoice) {
        return 'tie';
    } else if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') {
        return 'player1';
    } else if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
        return 'player1';
    } else if (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
        return 'player1';
    } else {
        return 'player2';
    }
};

export const calculateDamage = (health, attackValue) => health - attackValue;

