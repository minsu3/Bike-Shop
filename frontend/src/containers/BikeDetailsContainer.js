import React, { Component } from "react";
import BikeSpecs from "../components/BikeSpecs";
import shopvenge from "../images/shopvenge.png";
import shopshiv from "../images/shopshiv.png";
import shopstumpjumper from "../images/shopstumpjumper.png";
import fetchAllBikeDetails from "../model/fetchAllBikeDetails";
import BikeMakesContainer from "./BikeMakesContainer";

class BikeDetailsContainer extends Component {
  state = {
    bikespecs: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchAllBikeDetails.all().then(data => {
      console.log("Setting the state to", data)
      this.setState({ bikespecs: data });
    });
  };

  render() {
    let indexLists;
    if (this.state.bikespecs) {
      indexLists = this.state.bikespecs.map((bikespec, index) => {
        console.log('brand',bikespec.brand)
        if(bikespec.brand === "specialized") {
          return (
            <BikeSpecs
              img={shopvenge}
              alt="venge"
              className="venge"
              bikespec={bikespec}
            />
          );
        } else if (bikespec.brand === "trek") {
          return (
            <BikeSpecs
              img={shopshiv}
              alt="shiv"
              className="shiv"
              bikespec={bikespec}
            />
          );
        } else if (bikespec.brand === "cannondale") {
          return (
            <BikeSpecs
              img={shopstumpjumper}
              alt="stumpjumper"
              className="stumpjumper"
              bikespec={bikespec}
            />
          );
        }
      });
    }
    console.log('index lists', indexLists);
    return (
      <div>
        {indexLists}
      </div>
    );
  }
}

export default BikeDetailsContainer;
