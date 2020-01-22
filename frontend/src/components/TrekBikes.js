import React, { Component } from "react";

class SpecializedBikes extends Component {
  render() {
    return (
      <div className="specs">
        <p> {this.props.bikespec.brand_name} </p>
        <p> {this.props.bikespec.type} </p>
        <p> {this.props.bikespec.category} </p>
        <p> {this.props.bikespec.size} </p>
        <p> {this.props.bikespec.color} </p>
        <p> {this.props.bikespec.material} </p>
        <p> {this.props.bikespec.component} </p>
      </div>
    );
  }
}

export default SpecializedBikes;
