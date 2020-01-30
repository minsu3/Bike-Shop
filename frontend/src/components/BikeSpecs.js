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
          <img src={this.props.img } alt=""/>
          <p> {this.props.bikespec.brand_id} </p>     
        </Nav.Link>
        <p>______________________________</p>
        <p> {this.props.bikespec.size} </p>
        <p> {this.props.bikespec.color} </p>
        <p> {this.props.bikespec.material} </p>
        <p> {this.props.bikespec.serial_number} </p>
        <p> {this.props.bikespec.component} </p>

        <ButtonToolbar className="buynow">
          <Button variant="dark">Buy Now</Button>
        </ButtonToolbar>
      </div>  
    );
  }
}

export default BikeSpecs;
