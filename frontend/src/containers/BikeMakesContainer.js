import React, {Component} from 'react';
import fetchAllBikeMakes from "../model/fetchAllBikeMakes";
import BikeMake from "../components/BikeMake";
import SpecializedBikes from "../components/SpecializedBikes";
import TrekBikes from "../components/TrekBikes";
import CannondaleBikes from "../components/CannondaleBikes";
import specialized from "../images/specialized.png";
// const image = require('../images/'+bikemake.brand);
import trek from "../images/trek.png";
import cannondale from "../images/cannondale.jpeg";
//import shoppingCart from '../components/shoppingCart';

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
        if(bikemake.brand === "specialized") {
          return(
            <BikeMake 
              img={specialized}
              alt="specialized"
              bikemake={bikemake}
              onClick= {SpecializedBikes}
            />
          )
        } if(bikemake.brand === "trek"){
          return(
            <BikeMake 
              img={trek}
              alt="trek"
              bikemake={bikemake}
              onClick={TrekBikes}
            />
          )
        } if(bikemake.brand === "cannondale"){
          return(
            <BikeMake 
              img={cannondale}
              alt="cannondale"
              bikemake={bikemake}
              onClick={CannondaleBikes}
            />
          )
        }
      });
    } 
    return <div>{indexList}</div>;
  }
}

export default BikeMakesContainer
