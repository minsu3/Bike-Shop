import React, { Component } from "react";
import fetchCannondale from "../model/fetchCannondale";
import Cannondale from "../components/Cannondale";
import cannondale from "../images/cannondale.jpeg";

class CannondaleContainer extends Component {
  state = {
    bikemakes: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchCannondale.all().then(data => {
      this.setState({ bikemakes: data });
    });
  };

  render() {
    let indexList;
    if (this.state.bikemakes) {
      indexList = this.state.bikemakes.map((bikemake, index) => {
        return (
          <div>
            <img src={cannondale} alt="brand" className="cannondale" />
            <Cannondale
              bikemake={bikemake}
              key={index}
              fetchData={this.fetchData}
            />
          </div>
        );
      });
    }
    return <div>{indexList}</div>;
  }
}

export default CannondaleContainer;
