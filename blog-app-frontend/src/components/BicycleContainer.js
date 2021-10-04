import React from 'react';
import BicycleItem from './BicycleItem';

export default function BicycleContainer({bicycles, deleteBicycle}) {


    const showBicycles = () => {
        return bicycles.map(bicycle => <BicycleItem key={bicycle.id} {...bicycle} deleteBicycle={deleteBicycle} />)
    }

    return(
        <ul className="bicycle-list">
            {showBicycles()}
        </ul>
    )
  }