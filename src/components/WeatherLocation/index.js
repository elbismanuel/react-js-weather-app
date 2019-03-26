import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherLocation = () => (
    <div className="weatherLocationCont"> 
        <Location city={"Ciudad de Panamá"} /> 
        <WeatherData />
    </div>
)

export default WeatherLocation