import React, { useState } from 'react';

const pala = () => {
  
  const [palaState, setPalaState] = useState({
    palas: [
      {name: 'Patator', weapon: 'hammer', health: 155}
    ]
  });
  
  const switchPalaHandler = () => {
    setPalaState ({
      palas: [
        {name: 'Atila', weapon: 'sword', health: 220}
      ]
    })
  };
   
  return (
    <div
    name = {palaState.palas[0].name}
    weapon = {palaState.palas[0].weapon}
    health = {palaState.palas[0].health}
    >
      <button onClick={switchPalaHandler}>Switch Pala</button>
      <p>I'm a Palouf and my name is {palaState.palas[0].name} my weapon is {palaState.palas[0].  weapon}.</p>
      <p>I have {palaState.palas[0].health} life points.</p>
    </div>
    
    ) 
  } 
  
  export default pala;