import React from 'react';

export default function BicycleItem({id, usage, frame_material, manufacturer, speeds, deleteBicycle}) {
    
    const handleClick = (e) => deleteBicycle(id)
    
    return(
        <li className="bicycle-item">
            <h4>Type: {usage}</h4>
            <h4>Frame Material: {frame_material}</h4>
            <h4>Made by: {manufacturer}</h4>
            <h4>Speeds: {speeds}</h4>
            <button onClick={handleClick} className="delete-button" >DELETE</button>
            {/* update button should go here for next blog */}
        </li>
    )
}

// test124 (for git issue)