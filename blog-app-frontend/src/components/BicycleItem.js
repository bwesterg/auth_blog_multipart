import React from 'react';

export default function BicycleItem({usage, frame_material, manufacturer, speeds}) {
    return(
        <li className="bicycle-item">
            <h4>Type: {usage}</h4>
            <h4>Frame Material: {frame_material}</h4>
            <h4>Made by: {manufacturer}</h4>
            <h4>Speeds: {speeds}</h4>
        </li>
    )
}

// test124 (for git issue)