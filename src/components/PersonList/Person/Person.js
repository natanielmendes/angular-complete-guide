import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';

class Person extends Component {
    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate');
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
    }
}

export default Person;