import React from 'react';
import Nav from "react-bootstrap/Nav";

const BikeMake = () => {
  return (
    <div className="brands">
      <h2>Choose Our Best Brands</h2>
      <Nav.Link href={`/bikes/`+this.props.bikemake.brand}>
        <img src={this.props.img} alt="" className="bikeMake" />
      </Nav.Link>
    </div>
  )
}

export default BikeMake;