import React, { useState } from "react";
import axios from "axios";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

function App() {
  const notyf = new Notyf();
  const [data, setData] = useState({})
  const [data1, setData1] = useState({})
  const [location, setLocation] = useState('')
  const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=04a6cb0dee273095d50c22fa775e99f9`
  const forecasturl1 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=04a6cb0dee273095d50c22fa775e99f9`
  const body = document.querySelector('body');
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(weatherurl).then((response) => {
        setData(response.data)
        function toggle(){
        if (response.data.weather[0].icon[2] === 'd'){
          body.classList.replace('dark','sun');
          }
          else if(response.data.weather[0].icon[2] === 'n'){
            body.classList.replace('sun','dark');
          }}
          toggle()
      }).catch((err) => {
        notyf.error("Invalid Location")
      })
      setLocation('');
      axios.get(forecasturl1).then((response) => {
        setData1(response.data)
      })
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.name ? <p>{data.name}</p> : <p>Delhi</p>}
            
          </div>
          <div className="main_type">
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : <h1>20.05 °C</h1>}
          </div>
          <div className="main_icon">
          <div className="discription">
            {data.weather ? <p>{data.weather[0].main}</p> : <p>Haze</p>}
          </div>
          <img
              src={`http://openweathermap.org/img/w/${data.main ? data.weather[0].icon :null}.png`}
              alt=""
              className="i1"
            />
          </div>
          </div>
        </div>
        <div className="bottom">
          <div className="feelslike">
            {data.main ? <p className="bold">{data.main.feels_like} °C</p> : <p className="bold">19.47 °C</p>}
            <p className="c1">Feels Like</p>
          </div>
          <div className="feelslike">
            {data.wind ? <p className="bold">{data.wind.speed} m/s</p> : <p className="bold">1.03 m/s</p>}
            <p className="c1">WindSpeed</p>
          </div>
          <div className="feelslike">
            {data.main ? <p className="bold">{data.main.humidity} %</p> : <p className="bold">52 %</p>}
            <p className="c1">Humidity</p>
          </div>
          <div className="feelslike">
            {data.visibility ? <p className="bold">{data.visibility} Km</p> : <p className="bold">2500 Km</p>}
            <p className="c1">Visibility</p>
          </div>
          <div className="feelslike ">
            {data.main ? <p className="bold">{data.main.pressure} hPA</p> : <p className="bold">1014 hPA</p>}
            <p className="c1">Pressure</p>
          </div>
        </div>
        <h3 id="m1">Future Forecast</h3>
        <div className="middle">
          <div className="container3">
            <div className="box1">
              <span>Day 1</span>
              <h3><span id="day1">
                {data1.list ? <p>{data1.list[2].main.temp}°C</p> : <p>15.95°C</p>}
              </span></h3>
              <br />
              <img
              src={`http://openweathermap.org/img/w/${data1.list ? data1.list[2].weather[0].icon :null}.png`}
              alt=""
              className="i2"
              />
              <br />
              <span>
                {data1.list ? <p>{data1.list[2].weather[0].main}</p> : <p>Clear</p>}
              </span>
              <br />
              <h4>Min: <span id="day1min">{data1.list ? <p>{data1.list[2].main.temp_min}°C</p> : <p>15.95°C</p>}</span></h4>
              <br />
              <h4>Max: <span id="day1max">{data1.list ? <p>{data1.list[2].main.temp_max}°C</p> : <p>15.95°C</p>}</span></h4>
              <br />
            </div>
            <div className="box2">
              <span>Day 2</span>
              <h3><span id="day2">
                {data1.list ? <p>{data1.list[9].main.temp}°C</p> : <p>18.45°C</p>}</span></h3>
              <br />
              <img
              src={`http://openweathermap.org/img/w/${data1.list ? data1.list[9].weather[0].icon :null}.png`}
              alt=""
              className="i2"
              />
              <br />
              <span>
                {data1.list ? <p>{data1.list[9].weather[0].main}</p> : <p>Clouds</p>}
              </span>
              <br />
              <h4>Min: <span id="day2min">{data1.list ? <p>{data1.list[9].main.temp_min}°C</p> : <p>18.45°C</p>}</span></h4>
              <br />
              <h4> Max: <span id="day2max">{data1.list ? <p>{data1.list[9].main.temp_max}°C</p> : <p>18.45°C</p>}</span></h4>
              <br />
            </div>
            <div className="box3">
              <span>Day 3</span>
              <h3><span id="day3">{data1.list ? <p>{data1.list[17].main.temp}°C</p> : <p>19.63°C</p>}</span></h3>
              <br />
              <img
              src={`http://openweathermap.org/img/w/${data1.list ? data1.list[17].weather[0].icon :null}.png`}
              alt=""
              className="i2"
              />
              <br />
              <span>
                {data1.list ? <p>{data1.list[17].weather[0].main}</p> : <p>Clear</p>}
              </span>
              <br />
              <h4>Min: <span id="day3min">{data1.list ? <p>{data1.list[17].main.temp_min}°C</p> : <p>19.63°C</p>}</span></h4>
              <br />
              <h4>Max: <span id="day3max">{data1.list ? <p>{data1.list[17].main.temp_max}°C</p> : <p>19.63°C</p>}</span></h4>
              <br />
            </div>
            <div className="box4">
              <span>Day 4</span>
              <h3><span id="day4">{data1.list ? <p>{data1.list[25].main.temp}°C</p> : <p>20.16°C</p>}</span></h3>
              <br />
              <img
              src={`http://openweathermap.org/img/w/${data1.list ? data1.list[25].weather[0].icon :null}.png`}
              alt=""
              className="i2"
              />
              <br />
              <span>
                {data1.list ? <p>{data1.list[25].weather[0].main}</p> : <p>Clear</p>}
              </span>
              <br />
              <h4>Min: <span id="day4min">{data1.list ? <p>{data1.list[25].main.temp_min}°C</p> : <p>20.16°C</p>}</span></h4>
              <br />
              <h4>Max: <span id="day4max">{data1.list ? <p>{data1.list[25].main.temp_max}°C</p> : <p>20.16°C</p>}</span></h4>
              <br />
            </div>
            <div className="box4">
              <span>Day 5</span>
              <h3><span id="day5">{data1.list ? <p>{data1.list[33].main.temp}°C</p> : <p>21.19°C</p>}</span></h3>
              <br />
              <img
              src={`http://openweathermap.org/img/w/${data1.list ? data1.list[33].weather[0].icon :null}.png`}
              alt=""
              className="i2"
              />
              <br />
              <span>
                {data1.list ? <p>{data1.list[33].weather[0].main}</p> : <p>Clouds</p>}
              </span>
              <br />
              <h4>Min: <span id="day5min">{data1.list ? <p>{data1.list[33].main.temp_min}°C</p> : <p>21.19°C</p>}</span></h4>
              <br />
              <h4>Max: <span id="day5max">{data1.list ? <p>{data1.list[33].main.temp_max}°C</p> : <p>21.19°C</p>}</span></h4>
              <br />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
