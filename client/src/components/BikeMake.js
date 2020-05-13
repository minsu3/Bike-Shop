import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
// import BikeDetails from './BikeDetails';


class BikeMake extends Component {
  render() {
    return (
      <div className="brands">
        <Nav.Link href={"/bikes/" + this.props.bikemake.brand}>
        <h2>Choose Our Best Brands</h2>
          <img src={this.props.img} alt="" className="bikeMake" />
        </Nav.Link>
      </div>
    );
  }
}

export default BikeMake;