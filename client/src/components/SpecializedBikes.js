import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class SpecializedBikes extends Component {
  render() {
    return (
      <div className="specs">

        <Nav.Link href={"/bikes/"+this.props.bikedetail.brand+"/"+this.props.bikedetail.bike_name} className="hover">
          <img src={this.props.bikedetail.image} alt="new" />
          <p><strong>{this.props.bikedetail.brand} {this.props.bikedetail.bike_name}</strong></p>
        </Nav.Link> 

        <p> ${this.props.bikedetail.price}</p>
        {/* <p>______________________________</p> */}

        <div className="text-align-left">
          <p> <strong>Size:</strong> {this.props.bikedetail.size} </p>
          <p> <strong>Color:</strong> {this.props.bikedetail.color} </p>
          <p> <strong>Material:</strong> {this.props.bikedetail.material} </p>
          <p> <strong>Serial #:</strong> {this.props.bikedetail.serial_number} </p>
          <p> <strong>Component:</strong> {this.props.bikedetail.component} </p>
        </div>

        <ButtonToolbar className="buynow">
          <Button variant="dark" href={"/shoppingcart/" + this.props.bikedetail.brand + "/" + this.props.bikedetail.bike_name}>Add to Cart</Button>
        </ButtonToolbar>
        
      </div>  
    );
  }
}

export default SpecializedBikes;
