import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import BikeSpecs from './BikeSpecs';


class BikeMake extends Component {
  render() {
    return(
      <div className="brands">
          <Nav.Link href={"/bikes/"+this.props.bikemake.brand}>
            <h3>
              <img src={this.props.img} />
              {/* {this.props.bikemake.brand} */}
            </h3>
          </Nav.Link>
      </div>
    )
  }
}

export default BikeMake;