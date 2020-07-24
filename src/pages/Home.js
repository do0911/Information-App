import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Home = () => {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Home</h1>
        <hr className="my-2" />
        <p className="lead">News, Weather, Map</p>
      </Container>
    </Jumbotron>
  );
};

export default Home;
