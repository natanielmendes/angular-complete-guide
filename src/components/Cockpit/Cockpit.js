import React, { useEffect } from 'react';

import './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
    }, []);

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = 'Red';
    }

    if (props.persons.length <= 2) {
        assignedClasses.push('red'); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold'); // classes = ['red', 'blue']
    }

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working! YAY</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Person List</button>
        </div>
    );
};

export default cockpit;