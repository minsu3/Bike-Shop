import React, { Component } from 'react';
import sworks from "../images/sworks.jpg";
import bikeview from "../images/bikeview.jpg";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import riding from "../images/riding.mp4";
import footerimage from "../images/footerimage.png";
import landing from "../images/landing.jpg";
import treklanding from "../images/treklanding.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <video className="videoTag" autoPlay loop muted>
          <source src={riding} type="video/mp4" />
        </video>

        <div className="title">
          <h1>Ride bikes.</h1>
          <h1>Have fun.</h1>
          <h1>Feel good.</h1>
          <ButtonToolbar>
            <Button href={"/bikes"} variant="dark" className="shopnow">
              SHOP NOW
            </Button>
          </ButtonToolbar>
        </div>

        <img src={landing} alt="landing" className="landing" />
        <img src={treklanding} alt="treklanding" className="treklanding" />

        <img src={sworks} alt="sworks" className="sworks" />
        <img src={bikeview} alt="bikeview" className="bikeview" />
        <img src={footerimage} alt="reactbike" className="footer" />
      </div>
    );
  }
}

export default Home;