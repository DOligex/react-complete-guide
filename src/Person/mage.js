import React from 'react';

const mage = (props) => {
    return <div style={style}>
        <div style={style2}>
            <p>My name is {props.name} !</p>
            <p>I have {props.age} years old</p>
            <p>In game I'm a {props.class} and its fun</p>
            <p>I'm a {props.race} and it's cool !</p>
        </div>
    </div>
} 



const style = {
    
    width: '60%',
    margin: '25px auto 55px',
    border: '1px solid #eee',
    padding: '16px',
    textAlign: 'center',
    boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
    display: 'flex',
    justifyContent: 'center'
}

const style2 ={
    color:'red',
    maxWidth: '200px',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
    padding: '1em',
    margin: '1em auto'
}

 export default mage;