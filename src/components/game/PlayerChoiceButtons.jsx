import React from 'react';
import { string, func } from 'prop-types';
import '../../utils/commonStyles.scss';

const PlayerChoiceButtons = ({ currentChoice, makeChoice }) => {
    const getStatusClass = (buttonOption) => {
        return buttonOption === currentChoice ? 'active' : '';
    } 

    return (
        <div className="flex flex-direction-row flex-justify-around">
            <button name="rock" className={getStatusClass('rock')} onClick={() => makeChoice('rock')}>
                ROCK
            </button>
            <button name="paper" className={getStatusClass('paper')} onClick={() => makeChoice('paper')} >
                PAPER
            </button>
            <button name="scissors" className={getStatusClass('scissors')} onClick={() => makeChoice('scissors')} >
                SCISSORS
            </button>
        </div>
    )
}

PlayerChoiceButtons.propTypes = {
    currentSelection: string.isRequired,
    updateCurrentSelection: func.isRequired,
}

export default PlayerChoiceButtons;