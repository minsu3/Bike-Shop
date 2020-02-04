import React, { Component } from "react";
import SpecializedBikes from "../components/SpecializedBikes";
import TrekBikes from "../components/TrekBikes";
import CannondaleBikes from "../components/CannondaleBikes";
import fetchAllBikeDetails from "../model/fetchAllBikeDetails";
// import BikeMakesContainer from "./BikeMakesContainer";

import shopvenge from "../images/shopvenge.png";
import shopshiv from "../images/shopshiv.png";
import shopstumpjumper from "../images/shopstumpjumper.png";
import shopdomane from "../images/shopdomane.png";
import shopboone from "../images/shopboone.png";
import shopsupercaliber from "../images/shopsupercaliber.png";
import shopcaad12 from "../images/shopcaad12.png";
import shopsupersixevo from "../images/shopsupersixevo.png";
import shopbadhabit from "../images/shopbadhabit.png";

class BikeDetailsContainer extends Component {
  state = {
    bikedetails: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchAllBikeDetails.all().then(data => {
      console.log("Setting the state to", data)
      this.setState({ bikedetails: data });
    });
  };

  render() {
    let indexLists;
    if (this.state.bikedetails) {
      indexLists = this.state.bikedetails.map((bikedetail, index) => {
        if(bikedetail.brand === "specialized" && bikedetail.bike_name === "Venge") {
          return (
            <SpecializedBikes
              img={shopvenge}
              alt="venge"
              bikedetail={bikedetail}
            />
          );
        } 
        else if(bikedetail.brand === "specialized" && bikedetail.bike_name === "Shiv") {
          return (
            <SpecializedBikes
              img={shopshiv}
              alt="venge"
              bikedetail={bikedetail}
            />
          );
        } 
        else if(bikedetail.brand === "specialized" && bikedetail.bike_name === "Stumpjumper") {
          return (
            <SpecializedBikes
              img={shopstumpjumper}
              alt="venge"
              bikedetail={bikedetail}
            />
          );
        } 
        else if (bikedetail.brand === "trek" && bikedetail.bike_name === "Domane") {
          return (
            <TrekBikes
              img={shopdomane}
              alt="shiv"
              bikedetail={bikedetail}
            />
          );
        } 
        else if (bikedetail.brand === "trek" && bikedetail.bike_name === "Boone") {
          return (
            <TrekBikes
              img={shopboone}
              alt="shiv"
              bikedetail={bikedetail}
            />
          );
        } 
        else if (bikedetail.brand === "trek" && bikedetail.bike_name === "Super Caliber") {
          return (
            <TrekBikes
              img={shopsupercaliber}
              alt="shiv"
              bikedetail={bikedetail}
            />
          );
        } 
        else if (bikedetail.brand === "cannondale" && bikedetail.bike_name === "Super Six Evo") {
          return (
            <CannondaleBikes
              img={shopsupersixevo}
              alt="stumpjumper"
              bikedetail={bikedetail}
            />
          );
        }
        else if (bikedetail.brand === "cannondale" && bikedetail.bike_name === "Bad Habit") {
          return (
            <CannondaleBikes
              img={shopbadhabit}
              alt="stumpjumper"
              bikedetail={bikedetail}
            />
          );
        }
        else if (bikedetail.brand === "cannondale" && bikedetail.bike_name === "Caad 12") {
          return (
            <CannondaleBikes
              img={shopcaad12}
              alt="stumpjumper"
              bikedetail={bikedetail}
            />
          );
        }
      });
    }
    return (
      <>
        {indexLists}
      </>
    );
  }
}

export default BikeDetailsContainer;
