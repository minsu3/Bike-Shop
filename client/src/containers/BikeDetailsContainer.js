import React, { Component } from "react";
import SpecializedBikes from "../components/bikes/SpecializedBikes";
import TrekBikes from "../components/bikes/TrekBikes";
import CannondaleBikes from "../components/bikes/CannondaleBikes";
import { fetchAllBikeDetails } from "../model/fetch";

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
    let bikeLists
    let bikeBrand = this.props.brand
    if (this.state.bikedetails) {
      bikeLists = this.state.bikedetails.map((bikedetail) => {
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
          return <CannondaleBikes bikedetail={bikedetail} />
        } else return <></>
      });
    }
    return (
      <>{bikeLists}</>
    );
  }
}

export default BikeDetailsContainer;
