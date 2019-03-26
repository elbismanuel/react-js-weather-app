import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

//Importación de constantes
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    verificar,
} from '../../../constants/weather'

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
} 

//Función para desplegar el tipo de icono
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else 
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperature">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
)

//Definir validación en los parametros del componente
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;