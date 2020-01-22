import React, { Component } from "react";
import fetchCannondaleBikes from "../model/fetchCannondaleBikes";
import CannondaleBikes from "../components/CannondaleBikes";

class CannondaleBikesContainer extends Component {
  state = {
    bikespecs: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchCannondaleBikes.all().then(data => {
      this.setState({ bikespecs: data });
    });
  };

  render() {
    let indexLists;
    if (this.state.bikespecs) {
      indexLists = this.state.bikespecs.map((bikespec, index) => {
        return (
          <CannondaleBikes
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

export default CannondaleBikesContainer;
