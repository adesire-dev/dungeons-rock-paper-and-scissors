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

/**
    Takes two combat utilities objects in the shape specified below
    {
        stats: { health: number, attack: number },
        updateHandler: func,
        choice: string,
    }

*/
export const handleCombat = (player1CombatUtils, player2CombatUtils) => {
    // destructure combat utils objects
    const {
        stats: player1,
        updateHandler: updatePlayer1,
        choice: player1Choice,
    } = player1CombatUtils;

    const {
        stats: player2,
        updateHandler: updatePlayer2,
        choice: player2Choice,
    } = player2CombatUtils;

    const winner = calculateRoundWinner(player1Choice, player2Choice);

    if (winner === 'player1') {
        const { health } = player2;
        const { attack } = player1;
        const updatedPlayer2 = {
            ...player2,
            health: health - attack,
        }
        updatePlayer2(updatedPlayer2);
    } else if (winner === 'player2') {
        // clean this up into a utility function
        const { health } = player1;
        const { attack } = player2;
        const updatedPlayer1 = {
            ...player1,
            health: health - attack,
        }
        updatePlayer1(updatedPlayer1);
    }
}