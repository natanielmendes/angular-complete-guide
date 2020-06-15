import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Fulano', age: Math.floor(Math.random() * 7) + 23 },
      { name: 'Cicrano', age: Math.floor(Math.random() * 12) + 18 },
      { name: 'CKAD', age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log("Was clicked!")
    // DON'T DO THIS! this.state.persons[0].name = 'Natan'
    this.setState({
      persons: [
        { name: newName, age: Math.floor(Math.random() * 7) + 23 },
        { name: 'Cicrano', age: Math.floor(Math.random() * 12) + 18 },
        { name: 'CKAD', age: 23 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Fulano', age: Math.floor(Math.random() * 7) + 23 },
        { name: event.target.value, age: Math.floor(Math.random() * 12) + 18 },
        { name: 'CKAD', age: 23 }
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Natan!')} /* Preferably use this approach in order
            to bind arguments to the function */
            changed={this.nameChangeHandler}>My hobbies: Racing</Person> 
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      )
    }

    return (
      <div className="App">
        <h1 className="App-title">Hi, I'm a React App</h1>
        <p>This is really working! YAY</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Person List</button>
        {persons}
      </div>
    );
  }
}

export default App;

// state = {
//   persons: [
//     { name: 'Fulano', age: Math.floor(Math.random() * 7) + 23 },
//     { name: 'Cicrano', age: 22 },
//     { name: 'CKAD', age: 23 }
//   ]
// }

// switchNameHandler = () => {
//   // console.log("Was clicked!")
//   // DON'T DO THIS! this.state.persons[0].name = 'Natan'
//   this.setState({
//     persons: [
//       { name: 'Natan', age: Math.floor(Math.random() * 7) + 23 },
//       { name: 'Cicrano', age: Math.floor(Math.random() * 12) + 18 },
//       { name: 'CKAD', age: 23 }
//     ]
//   })
// }