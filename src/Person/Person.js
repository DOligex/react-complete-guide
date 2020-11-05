import React from 'react';

const person = (props) => {
    return <div style = {style}>
        <p>I'm a person my name is {props.name} and I have {props.age} years old ! </p>
        <p>{props.children}</p>
        {/* double binding */}
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
}

const style = {
    
        width: '60%',
        margin: '16px auto',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        textAlign: 'center'
}

export default person;