import React, { Component } from "react";
import fetchSpecializedBikes from "../model/fetchSpecializedBikes";
import SpecializedBikes from "../components/SpecializedBikes";

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
        return (
            <SpecializedBikes 
              bikespec={bikespec} 
              key={index} 
              fetchData={this.fetchData}   
            />
        )
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
