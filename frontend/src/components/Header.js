import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1
};

class Header extends Component {
  render() { 
    return (
      <div>
        <div style={navStyle}>
          <Navbar variant="dark" className="color-nav">
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

          <Navbar bg="light" variant="light" className="nextbar">
            <Navbar.Brand href={"/home"} id="brand">
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
        </div>
      </div>
    );
  }
}

export default Header;