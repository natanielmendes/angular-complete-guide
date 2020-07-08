import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import './Person.css';

class Person extends Component {
    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate');
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p key="i2">{this.props.children}</p>
                <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Aux>
        );
    }
}

export default Person;