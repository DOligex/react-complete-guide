import React from 'react';


const pala = (props) => {

    return <div style = {style3}>
        <p>I'm a Palouf my name is {props.name}</p>
        <p>{props.children}</p>

    </div>
}

const style3 = {
    
    width: '60%',
    margin: '25px auto 55px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12)`
}

export default pala;