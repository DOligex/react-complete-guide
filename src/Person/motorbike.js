import React, { useState } from 'react';

import './motorbike.css';




const motorbike = () => {
  
  const [showMotorbike, setShowmotorbike] = useState(false);

  const [motorbikeState, setMotorbikeState] = useState({
    motorbikes: [
      {brand: 'Yamaha', color: 'Blue'},
      {brand: 'Ducati', color: 'Red'},
      {brand: 'Honda', color: 'Orange'},
      {brand: 'KTM', color: 'Orange'},
      {brand: 'Aprilia', color: 'Green'}
    ]
  });

  const toogleMotorbikeHandler = () => {
    setShowmotorbike(!showMotorbike);
  }

  return (
    <div className="motorbike-container">
      <button onClick={toogleMotorbikeHandler}>Motorbikes Toogle</button>
      {showMotorbike && (
        <div>
          {motorbikeState.motorbikes.map(moto => {
            return <div className="motorbike-container">
              For {moto.brand} the color is {moto.color}.
            </div>
          })}
        </div>
      )}

    </div>
  )
}


export default motorbike;