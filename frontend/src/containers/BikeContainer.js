import React, {Component} from 'react';
import SpecializedContainer from './SpecializedContainer';
import TrekContainer from './TrekContainer';
import CannondaleContainer from './CannondaleContainer';

class BikeContainer extends Component {
  render() {
    return(
      <>
        <SpecializedContainer />
        <TrekContainer />
        <CannondaleContainer />
      </>
    )
  }
}

export default BikeContainer