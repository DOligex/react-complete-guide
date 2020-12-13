import React, { Component } from 'react';
import './App.css';

// React components
import Person from './Person/Person';
import Personne from './Person/personne';
import Pala from './Person/pala';
import Mage from './Person/mage';

class App extends Component {
  
  state = {
    persons: [
      { id:'cvbxb', name: 'Bobby', age: 28 },
      { id:'dfsdf', name: 'Brenda', age: 29 },
      { id:'jkhjj', name: 'Barbie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showDk:false,
    showPala: false
  }
  
  stateMage = {
    mageGroups: [
      { id: 1, name: 'atila', age: 44, class: 'arcanic mage', race: 'Gnome'},
      { id: 2, name: 'atilette', age: 35, class: 'arcanic mage', race: 'Human'},
      { id: 3, name: 'patate', age: 22, class: 'ice mage', race: 'dranaei'},
      { id: 4, name: 'brenda', age: 33, class: 'fire mage', race: 'nain'}
    ],
    showMage: true
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
    let mage = null;
    
    if (this.state.showPersons) {
      persons = (
        <div className={style}>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}/>
          
          
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
      if(this.stateMage.showMage) {
        mage = (
          <div className={style}>
          <Mage 
            name={this.stateMage.mageGroups[0].name}
            age={this.stateMage.mageGroups[0].age}
            class={this.stateMage.mageGroups[0].class}
            race={this.stateMage.mageGroups[0].race} />
          <Mage 
            name={this.stateMage.mageGroups[1].name}
            age={this.stateMage.mageGroups[1].age}
            class={this.stateMage.mageGroups[1].class}
            race={this.stateMage.mageGroups[1].race} />
          <Mage 
            name={this.stateMage.mageGroups[2].name}
            age={this.stateMage.mageGroups[2].age}
            class={this.stateMage.mageGroups[2].class}
            race={this.stateMage.mageGroups[2].race} />
          <Mage 
            name={this.stateMage.mageGroups[3].name}
            age={this.stateMage.mageGroups[3].age}
            class={this.stateMage.mageGroups[3].class}
            race={this.stateMage.mageGroups[3].race} />

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
            <div className="secondPart">
              {mage}
            </div>
            </div>
            );
          }
        }
        
        export default App;
        
