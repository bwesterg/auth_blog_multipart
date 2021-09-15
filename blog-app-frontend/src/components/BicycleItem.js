import React from 'react';

export default function BicycleItem({usage, frame_material, manufacturer, speeds}) {
    return(
        <li className="bicycle-item">
            <h4>{usage}</h4>
            <h4>{frame_material}</h4>
            <h4>{manufacturer}</h4>
            <h4>{speeds}</h4>
        </li>
    )
}