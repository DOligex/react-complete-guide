import React, { Component } from 'react';
import './App.css';

// React components
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bobby', age: 24 },
      { name: 'Brenda', age: 45 },
      { name: 'Stephanie', age: 35 },
    ]
  }
  
  switchNameHandler = () => {
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
    return (
      <div className="App">
      <h1> Hi, I'm a React App</h1>
      <p>This is really working</p>
      
      <Person name="Bobby" age="44">My Hobbies : Motorbike</Person>
      <Person name="Brenda" age="19"></Person>
      <Person name="Carmen" age="25"></Person>
      
      <button onClick={this.switchNameHandler}>Switch Name</button> 
      
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      
      </div>
      );
    }
    
  }
  
  export default App;
