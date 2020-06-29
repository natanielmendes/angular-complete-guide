import React, { Component } from 'react';
import './App.css';
import Person from '../components/PersonList/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fgbeg', name: 'Fulano', age: Math.floor(Math.random() * 7) + 23 },
      { id: 'jts', name: 'Cicrano', age: Math.floor(Math.random() * 12) + 18 },
      { id: 'gnfnsh', name: 'CKAD', age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false
  };
  
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; <-- WRONG
    // const persons = this.state.persons.slice(); <-- Choose this or the ES6 spread operator approach used below
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
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