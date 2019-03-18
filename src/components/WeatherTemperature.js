import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';

//Importación de constantes
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../constants/weather'

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
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} C°`}</span>
    </div>
)

export default WeatherTemperature;