import React, { useState, useEffect } from 'react';
import { handleCombat } from '../../Game/GameManagerUtils';

import PlayerContainer from './PlayerContainer';
import './BattleView.scss';

const BattleView = () => {
    const newPlayer1 = { name: "Marco", health: 102, attack: 34 };
    const newPlayer2 = { name: "Akim", health: 100, attack: 34 };
    const [player1Choice, setPlayer1Choice] = useState(null);
    const [player2Choice, setPlayer2Choice] = useState(null);
    const [player1, updatePlayer1] = useState(newPlayer1);
    const [player2, updatePlayer2] = useState(newPlayer2);

    // Handles Combat Events
    useEffect(() => {
        const player1CombatUtils = {
            stats: player1,
            updateHandler: updatePlayer1,
            choice: player1Choice,
        };
        const player2CombatUtils = {
            stats: player2,
            updateHandler: updatePlayer2,
            choice: player2Choice,
        }

        if (player1Choice && player2Choice) {
            handleCombat(player1CombatUtils, player2CombatUtils)
            setPlayer1Choice(null);
            setPlayer2Choice(null);
            // Reset Timer
        }
    }, [
        player1Choice, player2Choice, player1, player2
    ])


    // if both players have made a selection, call handleCombat
    // if a player won, calculateDamage
    // apply damage to losing player
    // if Losing player health <= 0, game ends

    // Set timer on handleCombat
    // ? If player does not choose before timer, they automatically lose



    return (
        <div className='battleView'>
            <PlayerContainer
                player={player1}
                makeChoice={(choice) => {
                    setPlayer1Choice(choice);
                    console.log(`setPlayer1Choice called with ${choice}`)
                }}
                currentChoice={player1Choice}
            />
            <PlayerContainer
                player={player2}
                makeChoice={(choice) => {
                    setPlayer2Choice(choice);
                    console.log(`setPlayer2Choice called with ${choice}`)
                }}
                currentChoice={player2Choice}
            />
        </div>
    )
};

export default BattleView
;