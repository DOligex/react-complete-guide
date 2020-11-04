import React from 'react';

const person = (props) => {
    return <div>
        <p>I'm a person my name is {props.name} and I have {props.age} years old ! </p>
        <p>{props.children}</p>
    </div>
}

export default person;