import React, { Component } from 'react';
import Header from './component/Header';
import bikes from './component/bikes';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import sworks from "./sworks.jpg";

class App extends Component {
	render() {
		return (
      <div>
        <Navbar variant="dark" fixed="bottom">
          <Navbar.Brand href={"/home"} className="next">
            REACT BIKE SHOP
          </Navbar.Brand>
          <Nav id="second">
            <Nav.Link href={"/bikes"} className="next">
              BIKES
            </Nav.Link>
            <Nav.Link href={"/aboutus"} className="next">
              ABOUT US
            </Nav.Link>
          </Nav>
        </Navbar>

        <Navbar variant="dark" fixed="top">
          <Nav id="first">
            <Nav.Link href={"/newsletter"} className="light">
              Subscribe
            </Nav.Link>
            <Nav.Link href={"/findretailer"} className="light">
              Find a retailer
            </Nav.Link>
            <Nav.Link href={"/userauth"} className="light">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar>
        <span>
          <img src={sworks} alt="banner" />
          <h1>React Bike Shop</h1>
          <Header />
					<bikes />
        </span>
      </div>
    );
	}
}

export default App;