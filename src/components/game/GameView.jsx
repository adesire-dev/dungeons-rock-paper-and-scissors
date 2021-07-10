import React, { useState, useEffect } from 'react';
import { calculateRoundWinner } from '../../Game/GameManager';

import PlayerContainer from './PlayerContainer';
import './GameView.scss';

const GameView = () => {
    const newPlayerOne = { name: "Marco", health: 102, attack: 34 };
    const newPlayerTwo = { name: "Akim", health: 100, attack: 34 };
    const [player1Choice, setPlayer1Choice] = useState(null);
    const [player2Choice, setPlayer2Choice] = useState(null);
    const [playerOne, updatePlayerOne] = useState(newPlayerOne);
    const [playerTwo, updatePlayerTwo] = useState(newPlayerTwo);

    useEffect(() => {
        const handleCombat = (player1Choice, player2Choice) => {
            const winner = calculateRoundWinner(player1Choice, player2Choice);
    
            if (winner === 'player1') {
                const { health } = playerTwo;
                const { attack } = playerOne;
                const updatedPlayerTwo = {
                    ...playerTwo,
                    health: health - attack,
                }
                updatePlayerTwo(updatedPlayerTwo);
            } else if (winner === 'player2') {
                // clean this up into a utility function
                const { health } = playerOne;
                const { attack } = playerTwo;
                const updatedPlayerOne = {
                    ...playerOne,
                    health: health - attack,
                }
                updatePlayerOne(updatedPlayerOne);
            }
    
            setPlayer1Choice(null);
            setPlayer2Choice(null);
            // Reset Timer
        }

        if (player1Choice && player2Choice) {
            handleCombat(player1Choice, player2Choice)
        }
    }, [
        player1Choice, player2Choice, playerOne, playerTwo
    ])


    // allow player1 to make selection
    // allow player2 to make selection
    // if both players have made a selection, call handleCombat
    // if a player won, calculateDamage
    // apply damage to losing player
    // if Losing player health <= 0, game ends

    // Set timer on handleCombat
    // ? If player does not choose before timer, they automatically lose



    return (
        <div className='gameView'>
            <PlayerContainer
                player={playerOne}
                makeChoice={(choice) => setPlayer1Choice(choice)}
                currentChoice={player1Choice}
            />
            <PlayerContainer
                player={playerTwo}
                makeChoice={(choice) => setPlayer2Choice(choice)}
                currentChoice={player2Choice}
            />
        </div>
    )
};

export default GameView;