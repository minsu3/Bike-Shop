import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import Venge from "./Venge";

class BikeSpecs extends Component {
  render() { 
    return (
      <div className="specs">
        <Nav.Link href={"/shoppingcart"}>
          <img src={ this.props.img } />
          <p> {this.props.brand_id} </p>
        </Nav.Link>
        <p>______________________________</p>
        {/* <p> {this.props.brand} </p> */}
        <p> {this.props.size} </p>
        <p> {this.props.color} </p>
        <p> {this.props.material} </p>
        <p> {this.props.serial_number} </p>
        <p> {this.props.component} </p>

        <ButtonToolbar className="buynow">
          <Button variant="dark">Buy Now</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default BikeSpecs;
