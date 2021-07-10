import React from 'react';
import Player from '../../Game/Player/Player';
import { calculateRoundWinner } from '../../Game/GameManager';

import PlayerContainer from './PlayerContainer';
import './GameView.scss';

const GameView = () => {
    const PlayerOne = new Player({ name: "Marco", health: 102 });
    const PlayerTwo = new Player({ name: "Akim", health: 100 });

    return (
        <div className='gameView'>
            <PlayerContainer player={PlayerOne} />
            <PlayerContainer player={PlayerTwo} />
        </div>
    )
};

export default GameView;