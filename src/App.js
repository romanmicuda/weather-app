import './styles.css';
import React, { useEffect, useState } from "react";
import WeatherCard from './components/weather';
import { Dimmer, Loader } from 'semantic-ui-react';
export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(process.env.REACT_APP_API_URL)
      });
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  },[lat,long])
  
  return (
<div className="App">
      {(typeof data.main != 'undefined') ? (
        <WeatherCard weatherData={data}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
       </div>
     )}
 </div>
  );
}