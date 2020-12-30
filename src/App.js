import React, { useState } from 'react';
import './App.css';
// React components
import Person from './Person/Person';

const app = props => {

  const [showPersons, setShowPersons]= useState(false);

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'id1', name: 'Bobby', age: 24 },
      { id: 'id2', name: 'Brenda', age: 45 },
      { id: 'id3', name: 'Stephanie', age: 35 },
    ],
  });

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = personsState.persons[personIndex];
    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({persons: persons}); 
  } 
  
  const deletePersonHandler = (personIndex) => {
    const personne = personsState.persons;
    personne.splice(personIndex, 1);
    setShowPersons({personne});
  }

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  }


    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={togglePersonsHandler}>Toggle Persons</button> 
        {showPersons && (
          <div>
            {personsState.persons.map((person, index) => {
              return <Person
                        click={() => deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        changed={(event) => nameChangeHandler(event, person.id)}
                      />
            })}
        </div>
        )}
      </div>
      );
    }

  
  export default app;
