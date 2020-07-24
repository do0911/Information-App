import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer } from "./base";
import { Home, News, Weather, Maps } from "./pages";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container className="themed-container">
        <Router>
          <Header />
          <Route exact path="/Home" component={Home}></Route>
          <Route path="/News" component={News}></Route>
          <Route path="/Weather" component={Weather}></Route>
          <Route path="/Maps" component={Maps}></Route>
          <Footer />
        </Router>
      </Container>
    );
  }
}

export default App;
