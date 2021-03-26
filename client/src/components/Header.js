import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import shoppingcart from "../images/shoppingcart.png";
import retailmarker from "../images/retailmarker.png";


const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1,
  padding: 0
};

const Header = () => {
  return (
    <div style={navStyle}>
      <Navbar variant="dark" className="color-nav">
        <Nav id="first">
          <Nav.Link href={"/newsletter"} className="light">
            Subscribe to our Newsletter
          </Nav.Link>
          <Nav.Link href={"/userauth"} className="signin-header">
            Sign in
          </Nav.Link>
          <Nav.Link href={"/findretailer"} className="findretailer-header">
            <img
              src={retailmarker}
              alt="retailmarker"
              className="retailmarker"
            />
            Find a retailer
          </Nav.Link>
        </Nav>
      </Navbar>

      <Navbar bg="light" variant="light" className="nextbar">
        <Navbar.Brand href={"/home"} id="brand-header">
          CycleList
        </Navbar.Brand>
        <Nav id="second">
          <Nav.Link href={"/bikes"} className="shop-by-brand">
            Shop by Brand
          </Nav.Link>
          <Nav.Link href={"/aboutus"} className="about-us">
            About Us
          </Nav.Link>
        </Nav>
        <Nav.Link href={"/shoppingcart"} className="shopping">
          <img src={shoppingcart} alt="shoppingcart" />
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default Header;