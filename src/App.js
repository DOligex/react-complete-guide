import React, { useState } from 'react';
import './App.css';
// React components
import Person from './Person/Person';
import Pala from './Person/Paladin';
import Deathknight from './Person/DeathKnight';
import Mage from './Person/Mage';
import Motorbike from './Person/motorbike';

const app = props => {
  // style en ligne css
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    borderRadius: '3px',
    padding: '8px',
    cursor: 'pointer'
  };

  const [otherState, setOtherState] = useState('some other value');
  const [showPersons, setShowPersons]= useState(false);

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'id1',name: 'Bobby', age: 24 },
      { id: 'id2',name: 'Brenda', age: 45 },
      { id: 'id3',name: 'Stephanie', age: 35 },
    ],
  });
  
  //useless car utilisé que dans les donnees en dur
  // const switchNameHandler = (newName) => {
    //   setPersonsState({
      //     persons: [
        //       { name: 'La pointe', age: 24 },
        //       { name: newName, age: 45 },
        //       { name: 'Stephanie', age: 55 },
        //     ]
        //   }); 
        // };
        
  
        //useless car utilisé que dans les donnees en dur
  // double binding 
  // const nameChangeHandler = (event) => {
  //   setPersonsState({
  //     persons: [
  //       { name: 'Bobby', age: 24 },
  //       { name: event.target.value , age: 45 },
  //       { name: 'Stephanie', age: 35 },
  //     ]
  //   }); 
  // } 

  const deletePersonHandler = (personIndex) => {
    const personne = personsState.persons;
    // ne fonctionne pas avec le spread operator ci-dessous
    // const personne = [...personsState.persons];
    personne.splice(personIndex, 1);
    // methode ci-dessous fonctionne aussi comme celle perso plus bas
    // setShowPersons({persons: personne});
    setShowPersons({personne});
  }

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  }


    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>

        {/* Données en dur begin*/}
        {/* <button 
        style={style}
        onClick={togglePersonsHandler}>Toggle Persons</button> 
        {showPersons && (
          <div>
          <Person 
           name={personsState.persons[0].name} 
           age={personsState.persons[0].age}
           />
          <Person 
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            click={switchNameHandler.bind(this, 'Matador')}
            // double binding 
            changed={nameChangeHandler}
            />
          <Person
           name={personsState.persons[2].name}
           age={personsState.persons[2].age}>
           My Hobbies : Motorbike
          </Person>
        </div>
        )} */}
        {/* Données en dur end*/}
        
        {/* Données en iteration en pur javascript begin*/}
        <button
        style={style}
        onClick={togglePersonsHandler}>Toggle Persons</button> 
        {showPersons && (
          <div>
            {personsState.persons.map((person, index) => {
              return <Person
                        click={() => deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                      />
            })}
        </div>
        )}





        {/* Données en iteration en pur javascript end*/}

        <Pala />
        <Deathknight />
        <Mage />
        <Motorbike />
      </div>
      );
    }

  
  export default app;
