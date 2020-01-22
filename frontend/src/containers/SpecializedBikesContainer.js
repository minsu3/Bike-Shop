import React, { Component } from "react";
import fetchSpecializedBikes from "../model/fetchSpecializedBikes";
import SpecializedBikes from "../components/SpecializedBikes";
import shopvenge from "../images/shopvenge.png";
import shopshiv from "../images/shopshiv.png";
import shopstumpjumper from "../images/shopstumpjumper.png";

class SpecializedBikesContainer extends Component {
  state = {
    bikespecs: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchSpecializedBikes.all().then(data => {
      this.setState({ bikespecs: data });
    });
  };

  render() {
    let indexLists;
    if (this.state.bikespecs) {
      indexLists = this.state.bikespecs.map((bikespec, index) => {
        if(bikespec.name === 'Venge'){
          return (
            <SpecializedBikes
              img={shopvenge}
              alt="venge"
              className="venge"
              bikespec={bikespec}
              key={index}
              fetchData={this.fetchData}
            />
          );
        } else if(bikespec.name === 'Shiv') {
          return (
            <SpecializedBikes
              img={shopshiv}
              alt="shiv"
              className="shiv"
              bikespec={bikespec}
              key={index}
              fetchData={this.fetchData}
            />
          );
        } else if(bikespec.name === 'Stumpjumper') {
          return (
            <SpecializedBikes
              img={shopstumpjumper}
              alt="stumpjumper"
              className="stumpjumper"
              bikespec={bikespec}
              key={index}
              fetchData={this.fetchData}
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

export default SpecializedBikesContainer;
