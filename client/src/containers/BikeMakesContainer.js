import React, {Component} from 'react';
import fetchAllBikeMakes from "../model/fetchAllBikeMakes";
import BikeMake from "../components/BikeMake";
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
      console.log(data)
      this.setState({ bikemakes: data });
    });
  };

  render() {
    let indexList;
    if(this.state.bikemakes) {
      indexList = this.state.bikemakes.map((bikemake, index) => {
        if(bikemake.brand === "Specialized") {
          return(
            <BikeMake
              img={specialized}
              alt="Specialized"
              bikemake={bikemake}
            />
          )
        } else if(bikemake.brand === "Trek"){
          return(
            <BikeMake 
              img={trek}
              alt="trek"
              bikemake={bikemake}
            />
          )
        } else if(bikemake.brand === "Cannondale"){
          return(
            <BikeMake 
              img={cannondale}
              alt="cannondale"
              bikemake={bikemake}
            />
          )
        } else return <h1>No bikes found.</h1>
      }) 
    }
    return <div>{indexList}</div>;
  }
}

export default BikeMakesContainer
