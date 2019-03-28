import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';

//Importación de constantes
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weather'

import './styles.css';

//{data} => destructuring -> UTILIZADO EN CASO DE SER OBJETOS GRANDES
const WeatherData = ({data: {temperature, weatherState, humidity, wind} }) => {
    
    return(<div className="weatherDataCont">
       <WeatherTemperature temperature={temperature} weatherState={weatherState} />
       <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>)
};

export default WeatherData;