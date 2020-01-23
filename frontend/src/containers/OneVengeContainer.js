import React, {Component} from 'react';

class OneVengeContainer extends Component {
  state = {
    bikespecs: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchOneSpecialized.all()
      .then(data => {
      this.setState({ bikespecs: data });
    });
  };
  render() {
    return (<div></div>)
  }
}