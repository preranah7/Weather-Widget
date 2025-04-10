import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo ] = useState({
        city:"Pune",
        feels_like : 24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather : "haze",
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return(
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh",
            width: "100vw"
          }}> 
            <h2>Weather Widget</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}