import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const weatherCases = {
  Rain: "10d",
  Clear: "01d",
  Thunder: "11d",
  Clouds: "03d",
  Snow: "13d",
  Drizzle: "10d",
  Haze: "50d",
};

const Weatherpage = ({ country, city, temp, feel_temp, weather }) => {
  const src = `http://openweathermap.org/img/wn/${weatherCases[weather]}@4x.png`;
  return (
    <div>
      <List>
        <img src={src} alt="undefined" />
        <ListItem>
          <ListItemText primary={country} secondary={city}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary={temp + " º"} secondary="Temperature" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={feel_temp + " º"}
            secondary="wind chill Temperature"
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Weatherpage;
