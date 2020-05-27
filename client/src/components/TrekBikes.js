import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class TrekBikes extends Component {
  render() {
    return (
      <div className="specs">
        <Nav.Link
          href={
            "/bikes/" +
            this.props.bikedetail.brand +
            "/" +
            this.props.bikedetail.bike_name
          }
          className="hover"
        >
          <img src={this.props.bikedetail.image} alt="new" />
          <p>
            <strong>
              {this.props.bikedetail.bike_name}
            </strong>
          </p>
          <p style={{"fontSize":"x-small"}}>click for more info</p>
        </Nav.Link>

        <ButtonToolbar className="buynow">
          <Button
            variant="dark"
            href={
              "/shoppingcart/" +
              this.props.bikedetail.brand +
              "/" +
              this.props.bikedetail.bike_name
            }
          >
            Add to Wishlist
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default TrekBikes;
