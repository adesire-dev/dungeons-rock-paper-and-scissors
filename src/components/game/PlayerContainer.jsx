import React from 'react';

import './PlayerContainer.scss';

const PlayerContainer = ({ player }) => {
    return (
        <div className='playerContainer'>
            <h2>Name: {player.name}</h2>
            <h3>STATS</h3>
            <ul>
                <li>Health: {player.health}</li>
            </ul>
        </div>
    );
}

export default PlayerContainer;
