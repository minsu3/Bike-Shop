import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";

class Specialized extends Component {
  render() {
    return (
      <div className="brands">
        <h3>
          <Nav.Link href={"/bikes/specialized"}>
            {this.props.bikemake.brand}
          </Nav.Link>
        </h3>
      </div>
    );
  }
}

export default Specialized;