import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import getOneBike from "./getOneBike"

class CannondaleBikes extends Component {
  render() {
    return (
      <div className="specs">
        <Nav.Link href={"/bikes/" + this.props.bikedetail.brand + "/" + this.props.bikedetail.bike_name} className="hover" >
          <img src={this.props.img} alt="" />
          <p>
            {/* {this.props.bikedetail.brand}  */}
            {this.props.bikedetail.bike_name}
          </p>
          <getOneBike />
        </Nav.Link>
        <p>______________________________</p>
        <div className="text-align-left">
          <p> Size: {this.props.bikedetail.size} </p>
          <p> Color: {this.props.bikedetail.color} </p>
          <p> Material: {this.props.bikedetail.material} </p>
          <p> Serial #: {this.props.bikedetail.serial_number} </p>
          <p> Component: {this.props.bikedetail.component} </p>
        </div>

        <ButtonToolbar className="buynow">
          <Button variant="dark" href={"/viewbike"}>Buy Now</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default CannondaleBikes;
