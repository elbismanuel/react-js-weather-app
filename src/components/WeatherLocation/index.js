import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';

const WeatherLocation = () => {
    return <div> 
        <Location city={"Ciudad de Panamá"} /> 
        <WeatherData />
    </div>
}

export default WeatherLocation