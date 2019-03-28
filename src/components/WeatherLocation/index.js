import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
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
} from '../../constants/weather'

const data = {
    temperature: 27,
    weatherState : CLOUDY,
    humidity: 87,
    wind: "15 m/s"
}

const WeatherLocation = () => (
    <div className="weatherLocationCont"> 
        <Location city={"Ciudad de Panamá"} /> 
        <WeatherData data={data} />
    </div>
)

export default WeatherLocation