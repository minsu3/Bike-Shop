import React, { Component } from "react";
import fetchTrekBikes from "../model/fetchTrekBikes";
import TrekBikes from "../components/TrekBikes";
import shopdomane from "../images/shopdomane.png";
import shopsupercaliber from "../images/shopsupercaliber.png";
import shopboone from "../images/shopboone.png";

class TrekBikesContainer extends Component {
  state = {
    bikespecs: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchTrekBikes.all().then(data => {
      this.setState({ bikespecs: data });
    });
  };

  render() {
    let indexLists;
    if (this.state.bikespecs) {
      indexLists = this.state.bikespecs.map((bikespec, index) => {
        if (bikespec.name === "Domane") {
          return (
            <TrekBikes
              img={shopdomane}
              alt="domane"
              className="domane"
              bikespec={bikespec}
              key={index}
              fetchData={this.fetchData}
            />
          );
        } else if (bikespec.name === "Supercaliber") {
          return (
            <TrekBikes
              img={shopsupercaliber}
              alt="supercaliber"
              className="supercaliber"
              bikespec={bikespec}
              key={index}
              fetchData={this.fetchData}
            />
          );
        } else if (bikespec.name === "Boone") {
          return (
            <TrekBikes
              img={shopboone}
              alt="boone"
              className="boone"
              bikespec={bikespec}
              key={index}
              fetchData={this.fetchData}
            />
          );
        }
      });
      return
    }
    return <div>{indexLists}</div>;
  }
}

export default TrekBikesContainer;
