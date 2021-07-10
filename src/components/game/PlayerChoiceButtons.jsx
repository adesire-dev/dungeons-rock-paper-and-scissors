import React from 'react';
import { string, func } from 'prop-types';
import '../../utils/commonStyles.scss';

const PlayerChoiceButtons = ({ currentSelection, updateCurrentSelection }) => {
    const getStatusClass = (option) => {
        return option === currentSelection ? 'active' : '';
    } 

    return (
        <div className="flex flex-direction-row flex-justify-around">
            <button name="rock" className={getStatusClass('rock')} onClick={() => updateCurrentSelection('rock')} />
            <button name="paper" className={getStatusClass('paper')} onClick={() => updateCurrentSelection('paper')} />
            <button name="scissors" className={getStatusClass('scissors')} onClick={() => updateCurrentSelection('scissors')} />
        </div>
    )
}

PlayerChoiceButtons.propTypes = {
    currentSelection: string.isRequired,
    updateCurrentSelection: func.isRequired,
}