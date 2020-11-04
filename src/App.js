import React, { Component } from 'react';
import './App.css';

// React components
import Person from './Person/Person';

class App extends Component {
  // creation d'un state qui est une propriete egal a un objet javascript ici un objet contenant des tableau
  state = {
    persons: [
    { name: 'Bobby', age: 24 },
    { name: 'Brenda', age: 45 },
    { name: 'Stephanie', age: 35 },
    ]
  }

  // debut de nom au choix mais le Handler est obligatoire pour la methode 
  switchNameHandler = () => {
    // console.log('Was cliked !');
    this.setState( {
      persons: [
        { name: 'La pointe', age: 24 },
        { name: 'Brenda', age: 45 },
        { name: 'Stephanie', age: 55 },
      ],
      otherState: 'some other value'
      }
    ) 

  }
  render() {
    // premiere facon d'afficher une vue dans le DOM
     return (
       <div className="App">
         <h1> Hi, I'm a React App</h1>
         <p>This is really working</p>
         
         {/* Les customs componenets commencent par une majuscule pour ne pas interferer avec les balises 'html normales' */}
         <Person name="Bobby" age="44">My Hobbies : Motorbike</Person>
         <Person name="Brenda" age="19"></Person>
         <Person name="Carmen" age="25"></Person>
         {/* ou si pas d'insertion  */}
         <Person />
         
         {/* creation de bouton pour switcher les users */}
         {/* attention onclick en JS pur ici onClick */}
         <button onClick={this.switchNameHandler}>Switch Name</button> 

         {/* Les states sont affiches de la facon ci-dessous */}
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
       
       </div>
     );
     {/* */}

    // seconde facon d'afficher une vue dans le DOM
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Does this work now ?'));
  }

}

export default App;
