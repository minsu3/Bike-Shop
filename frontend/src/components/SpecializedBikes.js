import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import Venge from "./Venge";

class SpecializedBikes extends Component {
  render() { 
    return (
      <div className="specs">
        <Nav.Link href={"/shoppingcart"}
          state={this.props.key}
        >
          <img src={this.props.img} />
          <p>
            {this.props.bikespec.brand_name} {this.props.bikespec.name}
          </p>
        </Nav.Link>
        <p>______________________________</p>
        <p> {this.props.bikespec.type} </p>
        <p> {this.props.bikespec.category} </p>
        <p> {this.props.bikespec.size} </p>
        <p> {this.props.bikespec.color} </p>
        <p> {this.props.bikespec.material} </p>
        <p> {this.props.bikespec.component} </p>

        <ButtonToolbar className="buynow">
          <Button variant="dark">Buy Now</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default SpecializedBikes;
