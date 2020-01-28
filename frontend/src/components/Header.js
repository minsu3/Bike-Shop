import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import shoppingcart from "../images/shoppingcart.png";
import retailmarker from "../images/retailmarker.png";

// fixed navbar on top of the page on every page
const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1
};

// Header component will contain all the components in the static navbar
class Header extends Component {
  render() { 
    return (
      <div style={navStyle}>
        <Navbar variant="dark" className="color-nav">
          <Nav id="first">
            <Nav.Link href={"/newsletter"} className="light">
              Subscribe to our Newsletter
            </Nav.Link>
            <Nav.Link href={"/findretailer"} className="findretailer">
              <img src={retailmarker} alt="retailmarker" className="retailmarker" />
              Find a retailer
            </Nav.Link>
            <Nav.Link href={"/userauth"} className="signin">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar>
{/* Second navbar containing home page, bike, and about us components */}
        <Navbar bg="light" variant="light" className="nextbar">
          <Navbar.Brand href={"/home"} id="brand">
            REACT BICYCLE SHOP
          </Navbar.Brand>
          <Nav id="second">
            <Nav.Link href={"/bikes"} className="next">
              Bikes
            </Nav.Link>
            <Nav.Link href={"/aboutus"} className="aboutus">
              About Us
            </Nav.Link>
          </Nav>
          <Nav.Link href={"/shoppingcart"}>
            <img src={shoppingcart} alt="shoppingcart" className="shopping" />
          </Nav.Link>
        </Navbar>
      </div>
    );
  }
}

export default Header;