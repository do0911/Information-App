import React, { Component } from "react";
import Axios from "axios";
import Weatherpage from "./Weatherpage";

const key = "4db63680f8c4739690e7668f2d78f7cc";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      lat: null,
      lon: null,
      country: null,
      city: null,
      temp: null,
      feel_temp: null,
      weather: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        this.setState({
          error: true,
        });
      }
    );
  }

  _getWeather = (lat, lon) => {
    Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
    ).then((data) => {
      this.setState({
        data: data.data,
        country: data.data.sys.country,
        city: data.data.name,
        temp: data.data.main.temp,
        feel_temp: data.data.main.feels_like,
        weather: data.data.weather[0].main,
      });
    });
  };

  render() {
    const { country, city, temp, feel_temp, weather } = this.state;
    console.log();
    return (
      <div>
        <Weatherpage
          country={country}
          city={city}
          temp={Math.floor(temp - 273.15)}
          feel_temp={Math.floor(feel_temp - 273.15)}
          weather={weather}
        />
      </div>
    );
  }
}

export default Weather;
