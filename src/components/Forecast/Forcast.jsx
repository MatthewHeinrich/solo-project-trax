import React, { useState } from "react";
import axios from 'axios';
import './Forecast.css'

export default function Forecast() {
    let [weather, setWeather] = useState({});

    const getForecast = async () => {
        // weather data fetch function will go here
        try{
            const response = await fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Minneapolis&units=imperial", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "a12c05a82fmshe29ceb7fc5eb8fbp1638a8jsn587ce9c7e34d",
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                }
            }) 
            const data = await response.json() 
            setWeather({temp:data.main.temp, clouds:data.weather[0].description, icon:data.weather[0].icon, sunrise:new Date(data.sys.sunrise), sunset:new Date(data.sys.sunset), humidity:data.main.humidity, wind:data.wind.speed})
            console.log(data)
            // const data2 = data.substring(5, data.length - 1)
            // console.log(JSON.parse(data2))
        } catch(error){
            console.error(error)
        }
    }

    // .then(response => response.json())
    //         .then(data => console.log(data))
            
    //         .catch(err => {
    //             console.error(err);
    //         });

        return (
            <>

                <div className="weather">
                    <div className='weatherCont'>
                    <h2 className="weatherHead" >Current Weather Conditions</h2>
                    <p>Temp: {weather.temp} F</p>
                    <p>Clouds: {weather.clouds}</p>
                    <p>Humidity: {weather.humidity}%</p>
                    <p>Wind: {weather.wind}mph</p>
                    {/* <p>{weather.sunrise?.toString()}</p>
                    <p>{weather.sunset?.toString()}</p> */}
                    <button onClick={getForecast} className='btn weatherBtn'>Get Forecast</button>
                    </div>
                </div>
            </>
        );
    }
