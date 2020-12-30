import React, { useState } from 'react';
import './Person.css';
const deathknight = () => {
  
  const [dkState, setDkState] = useState({
    dks: [
      {name: 'Krattos', weapon: 'sword', health: 255}
    ]
  });
  
  const switchDkHandler = () => {
    setDkState ({
      dks: [
        {name: 'Zeus', weapon: 'hammer', health: 235}
      ]
    })
  };
   
  return (
    <div
    className="Deathknight"
    name = {dkState.dks[0].name}
    weapon = {dkState.dks[0].weapon}
    health = {dkState.dks[0].health}
    >
      <button onClick={switchDkHandler}>Switch Deathknight</button>
      <p>I'm a DeathKnight and my name is {dkState.dks[0].name} 
        my weapon is {dkState.dks[0].  weapon}.</p>
      <p>I have {dkState.dks[0].health} life points.</p>
    </div>
    
    ) 
  } 
  
  export default  deathknight;