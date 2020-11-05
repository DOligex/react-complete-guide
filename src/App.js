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
    otherState: 'some other value',
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
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
        { name: 'Barbie', age: 99 },
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  
  render() {

    const style = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid white',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12)`
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className="person">This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {this.state.showPersons ? 
          <div>
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
          </div> : null 
        }

      </div>
      
      
      );
    }
  }
  
  export default App;
  
