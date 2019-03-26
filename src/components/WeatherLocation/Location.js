import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

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
    return (<div className="locationCont"><h1>{ city }</h1></div>)
}

//Definir validación en los parametros del componente
Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;