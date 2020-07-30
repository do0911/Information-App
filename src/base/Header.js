import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Header = () => {
  return (
    <AppBar position="static">
      <Tabs aria-label="wrapped label tabs example">
        <Tab label="Home" href="/" />
        <Tab label="News" href="/News" />
        <Tab label="Weather" href="/Weather" />
        <Tab label="Maps" href="/Maps" />
      </Tabs>
    </AppBar>
  );
};

export default Header;
