import React from "react";
import { Ionicons } from "@expo/vector-icons";

const weatherCases = {
  Rain: "ios-rainy",
  Clear: "ios-sunny",
  Thunder: "ios-Thunderstorm",
  Clouds: "ios-cloudy",
  Snow: "ios-snow",
  Drizzle: "ios-rainy",
  Haze: "ios-rainy",
};

const Weatherpage = ({ country, city, temp, feel_temp, weather }) => {
  return <div>{country}</div>;
};

export default Weatherpage;
