import React, {Component} from 'react';
import SpecializedContainer from './SpecializedContainer';
import TrekContainer from './TrekContainer';
import CannondaleContainer from './CannondaleContainer';


class BikeContainer extends Component {
  render() {
    return(
      <div>
      <h2 className="bike-brands">Brands</h2>
        <div className="bike-container">
        <SpecializedContainer />
        <TrekContainer />
        <CannondaleContainer />
        </div>
      </div>
    )
  }
}

export default BikeContainer