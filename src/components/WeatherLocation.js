import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => {
    return <div> 
        <Location city={"Ciudad de Panamá"} /> 
        <WeatherData />
    </div>
}

export default WeatherLocation