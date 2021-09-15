import React from 'react';
import BicycleItem from './BicycleItem';

export default function BicycleContainer({bicycles}) {


    const showBicycles = () => {
        return bicycles.map(bicycle => <BicycleItem key={bicycle.id} {...bicycle} />)
    }

    return(
        <ul className="bicycle-list">
            {showBicycles()}
        </ul>
    )
  }