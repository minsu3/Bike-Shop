import React, { Component } from "react";
import fetchTrekBikes from "../model/fetchTrekBikes";
import TrekBikes from "../components/TrekBikes";

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
        return (
          <TrekBikes
            bikespec={bikespec}
            key={index}
            fetchData={this.fetchData}
          />
        );
      });
    }
    return <div>{indexLists}</div>;
  }
}

export default TrekBikesContainer;
