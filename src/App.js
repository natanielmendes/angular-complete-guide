import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    const randomAge = Math.floor(Math.random() * 21);
    return (
      <div className="App">
        <h1 className="App-title">Hi, I'm a React App</h1>
        <p>This is really working! YAY</p>
        <Person name="Fulano" age={randomAge}/>
        <Person name="Cicrano" age="22">My hobbies: Racing</Person>
        <Person name="CKAD" age="23"/>
      </div>
    );
  }
}

export default App;
