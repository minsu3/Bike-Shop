import React, { Component } from "react";
import fetchCannondaleBikes from "../model/fetchCannondaleBikes";
import CannondaleBikes from "../components/CannondaleBikes";
import shopsupersixevo from "../images/shopsupersixevo.png";
import shopbadhabit from "../images/shopbadhabit.png";
import shopcaad12 from "../images/shopcaad12.png";

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
        if (bikespec.name === "SuperSix Evo") {
          return (
            <CannondaleBikes
              img={shopsupersixevo}
              alt="supersixevo"
              className="supersixevo"
              bikespec={bikespec}
              key={index}
              fetchData={this.fetchData}
            />
          );
        } else if (bikespec.name === "Bad Habit") {
          return (
            <CannondaleBikes
              img={shopbadhabit}
              alt="badhabit"
              className="badhabit"
              bikespec={bikespec}
              key={index}
              fetchData={this.fetchData}
            />
          );
        } else if (bikespec.name === "Caad-12") {
          return (
            <CannondaleBikes
              img={shopcaad12}
              alt="caad12"
              className="caad12"
              bikespec={bikespec}
              key={index}
              fetchData={this.fetchData}
            />
          );
        }
        
      });
    }
    return <div>{indexLists}</div>;
  }
}

export default CannondaleBikesContainer;
