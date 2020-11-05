import React, { Component } from 'react';
import './App.css';
// React components
import Person from './Person/Person';
import Pala from './Person/pala';
import Mage from './Person/mage';
import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';

class App extends Component {
  
  state = {
    username: 'Bobby La Pointe',
    persons: [
      { name: 'Bobby', age: 28 },
      { name: 'Brenda', age: 29 },
      { name: 'Barbie', age: 26 }
    ],
    otherState: 'some other value'
  };
  
  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
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
  
  render() {
    
    const style = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className="person">This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximus!!')}>Switch Name</button>
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

        <Pala name='Palouf'> </Pala>
        <Mage name='Atilette'></Mage>

        <div className="App">
          <ol>
            <li>1. Lorem Ipsum is simply dummy text of the printing and</li>
            <li>2. standard dummy text ever since the 1500s, when an unknown </li>
            <li>3. printer took a galley of type and scrambled it to make a </li>
            <li>4. type specimen book. It has survived not only five centuries,</li>
            <li>5. but also the leap into electronic typesetting, remaining </li>
            <li>6. essentially unchanged. It was popularised in the 1960s with</li>
            <li>7. the release of Letraset sheets containing Lorem Ipsum </li>
            <li>8. passages, and more recently with desktop publishing software</li>
            <li>9. like Aldus PageMaker including versions of Lorem Ipsum</li>
            <li>10. typesetting industry. Lorem Ipsum has been the industry's </li>
          </ol>

          <UserInput 
            changed={this.usernameChangedHandler}
            currentName={this.state.username} />

          <UserOutput userName={this.state.username}/>
          <UserOutput userName="Brenda"/>
          <UserOutput userName="Barbie"/>
        </div>
      
      </div>
      
      
      );
    }
  }
  
  export default App;
  
