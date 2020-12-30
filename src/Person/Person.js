import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div className="Person">
        <p onClick={props.click}>I'm a person my name is {props.name} and I have {props.age} years old ! </p>
        <p>{props.children}</p>
        {/* double binding  */}
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    )
}

export default person;