import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoTexr">{` Humedad: ${humidity} % -`}</span>
        <span className="extraInfoTexr">{`Viento: ${wind}%`}</span>
    </div>
)

//Definir validación en los parametros del componente
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;