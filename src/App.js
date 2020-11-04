import React, { Component } from 'react';
import './App.css';
// React components
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bobby', age: 28 },
      { name: 'Brenda', age: 29 },
      { name: 'Barbie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Brenda', age: 29 },
        { name: 'Barbie', age: 44 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Bobby', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Barbie', age: 26 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximus!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind('La pointe')}
          changed={this.nameChangeHandler}>My Hobbies: Motorbike
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

