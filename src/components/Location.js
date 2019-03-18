import React from 'react';

const Location = (props) => {

    //const city = props.city;

    //Destructuring
    const {city} = props;

    /* 
        Ejemplo
        const obj = {name: "Elbis", nick: "Elbis14x"}
        const {name: myName, nick: myNick}
        console.log(name);
    */
    return (<div><h1>{ city }</h1></div>)
}

export default Location;