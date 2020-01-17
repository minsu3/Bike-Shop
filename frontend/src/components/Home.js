import React, { Component } from 'react';
import sworks from "../images/sworks.jpg";
import reactbike from "../images/reactbike.png";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";


class Home extends Component {
    render() {
        return (
          <div className="Home">

            <img src={sworks} alt="banner" />

            <h1>The All New S-Works Venge</h1>

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