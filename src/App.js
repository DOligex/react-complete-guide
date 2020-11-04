import React, { useState } from 'react';
import './App.css';
// React components
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Bobby', age: 24 },
      { name: 'Brenda', age: 45 },
      { name: 'Stephanie', age: 35 },
    ]
  });
  
  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);
  
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'La pointe', age: 24 },
        { name: 'Brenda', age: 45 },
        { name: 'Stephanie', age: 55 },
      ]
    }); 
  };
  
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button> 
      
        <Person 
         name={personsState.persons[0].name} 
         age={personsState.persons[0].age}
        />
        <Person 
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        />
        <Person
         name={personsState.persons[2].name}
         age={personsState.persons[2].age}>
         My Hobbies : Motorbike
        </Person>
      
      </div>
      );
    }
  
  export default app;
