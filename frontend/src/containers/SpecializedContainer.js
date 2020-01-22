import React, {Component} from 'react';
import fetchSpecialized from "../model/fetchSpecialized";
import Specialized from "../components/Specialized";
import specialized from "../images/specialized.png";

class SpecializedContainer extends Component {
  state = {
    bikemakes: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchSpecialized.all().then(data => {
      this.setState({ bikemakes: data });
    });
  };

  render() {
    let indexList;
    if (this.state.bikemakes) {
      indexList = this.state.bikemakes.map((bikemake, index) => {
        return (
          <div>
            <Specialized
              bikemake={bikemake}
              key={index}
              fetchData={this.fetchData}
              img ={specialized}
              alt="specializedbrand"
              className="specialized"
            />
          </div>
        );
      });
    }
    return <div>{indexList}</div>;
  }
}

export default SpecializedContainer
