import React from 'react';

import PlayerChoiceButtons from './PlayerChoiceButtons';

import './PlayerContainer.scss';

const PlayerContainer = ({ player, makeChoice, currentChoice }) => {
    return (
        <div className='playerContainer'>
            <h2>Name: {player.name}</h2>
            <h3>STATS</h3>
            <ul>
                <li>Health: {player.health}</li>
            </ul>

            <PlayerChoiceButtons makeChoice={makeChoice} currentChoice={currentChoice}/>
        </div>
    );
}

export default PlayerContainer;
