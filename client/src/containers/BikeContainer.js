import React, {Component} from 'react';
import BikeMakesContainer from './BikeMakesContainer';

class BikeContainer extends Component {
  render() {
    return(
      <div>
      <h2 className="bike-brands">Brands</h2>
        <div className="bike-container">
        <BikeMakesContainer />
        </div>
      </div>
    )
  }
}

export default BikeContainer