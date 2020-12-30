import React, { createRef, useState } from 'react';
import './Person.css';

const mage = () => {

  const [showMage, setShowMage] = useState(false);

  const toggleMageHandler = () => {
    setShowMage(!showMage);
  }

  const [mageState, setMageState] = useState({
    mages: [
      {name: 'Ati', weapon: 'baguette', country: 'Kalimdor'},
      {name: 'Atila', weapon: 'baguette', country: 'Hurlevent'},
      {name: 'Belze', weapon: 'baguette', country: 'Forgefer'},
    ]
  });
  
  const switchFirstMageHandler = () => {
    setMageState({
      mages: [
        {name: 'Atilette', weapon: 'baton', country: 'Dalaran'},
        {name: 'Atila', weapon: 'baguette', country: 'Hurlevent'},
        {name: 'Belze', weapon: 'baguette', country: 'Forgefer'},
      ]
    })
  }
  
  const switchSecondMageHandler = () => {
    setMageState({
      mages: [
        {name: 'Ati', weapon: 'baguette', country: 'Kalimdor'},
        {name: 'Paupaul', weapon: 'baguette', country: 'Hell'},
        {name: 'Belze', weapon: 'baguette', country: 'Forgefer'},
      ]
    })
  };
  
  const mageNameChangeHandler = (event) => {
    setMageState({
      mages: [        
        {name: 'Ati', weapon: 'baguette', country: 'Kalimdor'},
        {name: 'Atila', weapon: 'baguette', country: 'Forgefer'},
        {name: 'Belze', weapon: 'baguette', country: event.target.value},
      ]
    })
  }

  return (
    <div 
    className="mage"
    name={mageState.mages[0].name}
    weapon={mageState.mages[0].weapon}
    country={mageState.mages[0].country}
    >
      <button onClick={toggleMageHandler}>Toggle Mages</button>
      {showMage && (
        <div>
          <button onClick={switchFirstMageHandler}>Switch {mageState.mages[0].name} datas</button>
          <div>I'm a mage, my name is {mageState.mages[0].name} my weapon is {mageState.mages[0]. weapon}  </div>
          <button onClick={switchSecondMageHandler}>Switch {mageState.mages[1].name} datas</button>
          <div>I leave in {mageState.mages[0].country}</div>
          <div>I'm a mage, my name is {mageState.mages[1].name} my weapon is {mageState.mages[1]. weapon}  </div>
          <div>I leave in {mageState.mages[1].country}</div>
          <div>I'm a mage, my name is {mageState.mages[2].name} my weapon is {mageState.mages[2]. weapon}  </div>
          <div changed={mageNameChangeHandler}>I leave in {mageState.mages[2].country}</div>
          <input type="text" onChange={mageNameChangeHandler} value={mageState.mages[2].country} />
        </div>
      )}
    </div>
  )
}


export default mage;