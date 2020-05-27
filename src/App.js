import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Fulano', age: Math.floor(Math.random() * 7) + 23 },
      { name: 'Cicrano', age: 22 },
      { name: 'CKAD', age: 23 }
    ]
  }

  switchNameHandler = () => {
    // console.log("Was clicked!")
    // DON'T DO THIS! this.state.persons[0].name = 'Natan'
    this.setState({
      persons: [
        { name: 'Natan', age: Math.floor(Math.random() * 7) + 23 },
        { name: 'Cicrano', age: Math.floor(Math.random() * 12) + 18 },
        { name: 'CKAD', age: 23 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hi, I'm a React App</h1>
        <p>This is really working! YAY</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
