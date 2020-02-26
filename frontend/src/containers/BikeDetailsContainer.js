import React, { Component } from "react";
import SpecializedBikes from "../components/SpecializedBikes";
import TrekBikes from "../components/TrekBikes";
import CannondaleBikes from "../components/CannondaleBikes";
import fetchAllBikeDetails from "../model/fetchAllBikeDetails";
// import BikeMakesContainer from "./BikeMakesContainer";

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
    let bikeLists;
    let bikeBrand = this.props.brand
    if (this.state.bikedetails) {
      bikeLists = this.state.bikedetails.map((bikedetail) => {
        // how should I refactor this?
        if(bikedetail.brand === bikeBrand && bikedetail.bike_name === "Venge") {
          console.log(bikedetail)
          return <SpecializedBikes bikedetail={bikedetail} onClick="venge" />
        } 
        else if(bikedetail.brand === bikeBrand && bikedetail.bike_name === "Shiv") {
          return <SpecializedBikes bikedetail={bikedetail} />
        } 
        else if(bikedetail.brand === bikeBrand && bikedetail.bike_name === "Stumpjumper") {
          return <SpecializedBikes bikedetail={bikedetail} />
        } 
        else if (bikedetail.brand === bikeBrand && bikedetail.bike_name === "Domane") {
          return <TrekBikes bikedetail={bikedetail} />
        } 
        else if (bikedetail.brand === bikeBrand && bikedetail.bike_name === "Boone") {
          return <TrekBikes bikedetail={bikedetail} />
        } 
        else if (bikedetail.brand === bikeBrand && bikedetail.bike_name === "Super Caliber") {
          return <TrekBikes bikedetail={bikedetail} />
        } 
        else if (bikedetail.brand === bikeBrand && bikedetail.bike_name === "Super Six Evo") {
          return <CannondaleBikes bikedetail={bikedetail} />
        }
        else if (bikedetail.brand === bikeBrand && bikedetail.bike_name === "Bad Habit") {
          return <CannondaleBikes bikedetail={bikedetail} />
        }
        else if (bikedetail.brand === bikeBrand && bikedetail.bike_name === "Caad 12") {
          return (
            <CannondaleBikes bikedetail={bikedetail} />
          );
        } else return <h1> </h1>
      });
    }
    return (
      <>{bikeLists}</>
    );
  }
}

export default BikeDetailsContainer;
