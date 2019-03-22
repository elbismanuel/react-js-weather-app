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

    if(icon)
        return <WeatherIcons name={icon} size="2x" />
    else 
        return <WeatherIcons name="day-sunny" size="2x" />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperature">
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} C°`}</span>
    </div>
)

//Definir validación en los parametros del componente
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;