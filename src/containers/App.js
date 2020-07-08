import React, { Component } from 'react';

import classes from './App.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  state = {
    persons: [
      { id: 'fgbeg', name: 'Fulano', age: Math.floor(Math.random() * 7) + 23 },
      { id: 'jts', name: 'Cicrano', age: Math.floor(Math.random() * 12) + 18 },
      { id: 'gnfnsh', name: 'CKAD', age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
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
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = <PersonList 
            personList={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return (
      <Aux>
        <div className={classes.App}>
          <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
          {this.state.showCockpit ? (<Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler} />
          ) : null}
          {persons}
        </div>
      </Aux>
    );
  }
}

export default App;