import React from 'react';

const person = (props) => {
    // insertion de code javascript dans le "html" avec {}
    // return <p>I'm a person my name is {prompt(`What is your name ?`)} and I have {Math.floor(Math.random() * 30)} years old ! </p>
    return <div>
        <p>I'm a person my name is {props.name} and I have {props.age} years old ! </p>
        {/* Pour passer les valeurs entre les balises ouvrantes et fermantes de eds composants appeles dans le App.js  */}
        {/* On utilise prosp.children */}
        <p>{props.children}</p>
    </div>
}

export default person;