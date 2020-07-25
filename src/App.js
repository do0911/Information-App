import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./base/Header";
import { Home, News, Weather, Maps } from "./pages";
import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return (
      <Container fixed>
        <Router>
          <Header />
          <Route exact path="/" component={Home}></Route>
          <Route path="/News" component={News}></Route>
          <Route path="/Weather" component={Weather}></Route>
          <Route path="/Maps" component={Maps}></Route>
        </Router>
      </Container>
    );
  }
}

export default App;
