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
            <img src={sworks} alt="banner" className="sworks" />
            <h1 id="venge">The All New S-Works Venge</h1>
            {/* <div className="fullscreen-video-wrap">
              <video
                src="riding.mp4"
                autoplay="true"
                loop="true"
              ></video>
            </div> */}

            <img src={reactbike} alt="reactbike" id="reactbike" />

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