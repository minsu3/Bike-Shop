import React, { Component } from 'react';
import sworks from "../images/sworks.jpg";
import reactbike from "../images/reactbike.png";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import riding from "../images/riding.mp4";

class Home extends Component {
  render() {
    return (
      <div>

        {/* Video as landing page */}
        <video className="videoTag" autoPlay loop muted>
          <source src={riding} type="video/mp4" />
        </video>

        <h1 id="ridebikes">Ride bikes</h1>
        <h1 id="havefun">Have fun</h1>
        <h1 id="feelgood">Feel good</h1>

        {/* React logo */}
        {/* <img src={reactbike} alt="reactbike" id="reactbike" /> */}

        <ButtonToolbar>
          <Button href={"/bikes"} variant="secondary" id="shopnow">
            SHOP NOW
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Home;