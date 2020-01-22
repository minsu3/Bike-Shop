import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class Trek extends Component {
  render() {
    return (
      <div className="brands">
        <h3>
          <Nav.Link href={"/bikes/trek"}>
            { this.props.bikemake.brand }
          </Nav.Link>
        </h3>
      </div>
    );
  }
}

export default Trek;
