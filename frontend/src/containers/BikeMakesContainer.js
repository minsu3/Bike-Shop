import React, {Component} from 'react';
import fetchAllBikeMakes from "../model/fetchAllBikeMakes";
import BikeMake from "../components/BikeMake";
import BikeSpecs from "../components/BikeSpecs";
import specialized from "../images/specialized.png";
import trek from "../images/trek.png";
import cannondale from "../images/cannondale.jpeg";

class BikeMakesContainer extends Component {
  state = {
    bikemakes: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchAllBikeMakes.all().then(data => {
      this.setState({ bikemakes: data });
    });
  };

  render() {
    let indexList;
    if (this.state.bikemakes) {
      indexList = this.state.bikemakes.map((bikemake, index) => {
        if(bikemake.brand === "Specialized"){
          return(
            <BikeMake 
              img={specialized}
              alt="specialized"
              bikemake={bikemake}
              onClick= {BikeSpecs}
            />
          )
        } if(bikemake.brand === "Trek"){
          return(
            <BikeMake 
              img={trek}
              alt="trek"
              bikemake={bikemake}
              onClick={BikeSpecs}
            />
          )
        } if(bikemake.brand === "Cannondale"){
          return(
            <BikeMake 
              img={cannondale}
              alt="cannondale"
              bikemake={bikemake}
              onClick={BikeSpecs}
            />
          )
        }
      });
    } 
    return <div>{indexList}</div>;
  }
}

export default BikeMakesContainer
