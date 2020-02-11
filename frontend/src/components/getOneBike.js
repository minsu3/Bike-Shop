import React from "react";

function getOneBike(props) {
  // let indexList;
  let bikeList;
  let bikeName = this.props.bike_name;
  if (this.props.bike_name) {
    bikeLists = this.props.bikedetails.map((bike_name) => {
      if (bike_name === this.props.bike_name) {
        return (
          <getOneBike
            bike_name={bike_name}
          />
        )
      }
    })
  }
  return (
    <div>
      <h2>SHOW SINGLE BIKE AND DESCRIPTION HERE</h2>
      {bikeName}
      <img src={this.props.img} alt="" />
    </div>
  );
}

export default getOneBike;