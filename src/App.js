import React, { Component } from 'react';
import './App.css';
// React components
import Person from './Person/Person';
import Personne from './Person/personne';
import Pala from './Person/pala';
class App extends Component {
  
  state = {
    persons: [
      { name: 'Bobby', age: 28 },
      { name: 'Brenda', age: 29 },
      { name: 'Barbie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showDk:false,
    showPala: false
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
  
  togglePersonalHandler = () => {
    const doesShowDk = this.state.showDk;
    this.setState({showDk: !doesShowDk});
  }

  togglePalaHandler = () => {
    const doesShowPala = this.state.showPala;
    this.setState({showPala: !doesShowPala})
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
      0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
      marginBottom: '50px'
    }

    let persons = null;
    let pala = null;

    if (this.state.showPersons) {
      persons = (
        <div className={style}>
          {this.state.persons.map(person => {
            return <Person 
            name={person.name}
            age={person.age}/>
          })}
            {/* <Person
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
              /> */}
          </div>
      )
    }

    if (this.state.showPala) {
      pala = (
        <div className={style}>
          <Pala 
            name="Patator"
            age="Undefined ... ;0">
          </Pala>

        </div>
      )
    }
    
    return (
      <div className="App">
        <div className="first-part">

        <h1>Hi, I'm a React App</h1>
        <p className="person">This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        
        {persons}
          
        </div>
        <div>
          <button
            style={style}
            onClick={this.togglePalaHandler}>
            Paladin affiché / caché</button>
        </div>

        {pala}

        <div>
          <h3>Hi I'm the second part</h3>
          <div>
            <p>This part is a test for the toggle condition</p>
            <button style={style}
            onClick={this.togglePersonalHandler}>Toggle V2.0</button>
            {this.state.showDk ?
              <div>
                <Personne
                name="Krattos"
                race="Dranei"
                ilvl="400"> I'm a famous warrior</Personne>  
              </div> : null  
            }
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default App;
  
