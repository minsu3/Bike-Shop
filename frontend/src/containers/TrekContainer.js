import React, { Component } from "react";
import fetchTrek from "../model/fetchTrek";
import Trek from "../components/Trek";

class TrekContainer extends Component {
  state = {
    bikemakes: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchTrek.all().then(data => {
      this.setState({ bikemakes: data });
    });
  };

  render() {
    let indexList;
    if (this.state.bikemakes) {
      indexList = this.state.bikemakes.map((bikemake, index) => {
        return (
          <Trek
            bikemake={bikemake}
            key={index}
            fetchData={this.fetchData}
          />
        );
      });
    }
    return <div>{indexList}</div>;
  }
}

export default TrekContainer;
