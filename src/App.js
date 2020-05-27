import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Fulano', age: Math.floor(Math.random() * 7) + 23 },
      { name: 'Cicrano', age: Math.floor(Math.random() * 12) + 18 },
      { name: 'CKAD', age: 23 }
    ]
  });

  const [otherState, setOtherState ] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("Was clicked!")
    // DON'T DO THIS! this.state.persons[0].name = 'Natan'
    setPersonsState({
      persons: [
        { name: 'Natan', age: Math.floor(Math.random() * 7) + 23 },
        { name: 'Cicrano', age: Math.floor(Math.random() * 12) + 18 },
        { name: 'CKAD', age: 23 }
      ]
    })
  }

  return (
    <div className="App">
      <h1 className="App-title">Hi, I'm a React App</h1>
      <p>This is really working! YAY</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;

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