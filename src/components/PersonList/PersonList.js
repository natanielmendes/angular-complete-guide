import React, { PureComponent } from 'react';

import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class PersonList extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[PersonList.js] getDerivedStateFromProps');
  //   return state;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[PersonList.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[PersonList.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[PersonList.js] componentWillUnmount');
  }

  render() {
    console.log('[PersonList.js] rendering...');
    return this.props.personList.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default PersonList;