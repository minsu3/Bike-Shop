import React, { Component } from "react";
import fetchSpecializedBikes from "../model/fetchAllBikeSpecs";
import BikeSpecs from "../components/BikeSpecs";
import shopvenge from "../images/shopvenge.png";
import shopshiv from "../images/shopshiv.png";
import shopstumpjumper from "../images/shopstumpjumper.png";
import fetchAllBikeSpecs from "../model/fetchAllBikeSpecs";

class BikeSpecsContainer extends Component {
  state = {
    bikespecs: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchAllBikeSpecs.all().then(data => {
      this.setState({ bikespecs: data });
    });
  };

  render() {
    let indexLists;
    if (this.state.bikespecs) {
      indexLists = this.state.bikespecs.map((bikespec, index) => {
        if(bikespec.brand_id === '1'){
          return (
            <BikeSpecs
              img={shopvenge}
              alt="venge"
              className="venge"
              bikespec={bikespec}
            />
          );
        } else if (bikespec.brand_id === '2') {
          return (
            <BikeSpecs
              img={shopshiv}
              alt="shiv"
              className="shiv"
              bikespec={bikespec}
            />
          );
        } else if (bikespec.brand_id === '3') {
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
    return (
      <div>
        {indexLists}
      </div>
    );
  }
}

export default BikeSpecsContainer;
