import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import BikeSpecs from './BikeSpecs';


class BikeMake extends Component {
  render() {
    let bikebrand;
    if (this.props.brand === "Specialized") {
      bikebrand = <BikeSpecs />
    } else if (this.props.brand === "Trek") {
      bikebrand = <BikeSpecs />
    } else if (this.props.brand === "Cannondale") {
      bikebrand = <BikeSpecs />
    }
    return(
      <nav>
        {bikebrand}
      </nav>
    )
  }
}

export default BikeMake;
      
      
// if (this.props.brand == "Specialized") {
//   return (
//     <div className="brands">
//       <Nav.Link href={"/bikes/specialized"}>
//         <h3>
//           <img src={this.props.img} />
//           {this.props.brand}
//         </h3>
//       </Nav.Link>
//     </div>
//   )
// } else if (this.props.brand == "Trek") {
//   return (
//     <div className="brands">
//       <Nav.Link href={"/bikes/trek"}>
//         <h3>
//           <img src={this.props.img} />
//           {this.props.brand}
//         </h3>
//       </Nav.Link>
//     </div>
//   )
// } else if (this.props.brand == "Cannondale") {
//   return (
//     <div className="brands">
//       <Nav.Link href={"/bikes/cannondale"}>
//         <h3>
//           <img src={this.props.img} />
//           {this.props.brand}
//         </h3>
//       </Nav.Link>
//     </div>
//   )
// }