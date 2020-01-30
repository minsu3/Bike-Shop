import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import route from './config/route'
import BikeMakesContainer from './containers/BikeMakesContainer';


class App extends Component {
	render() {
		return (
      <div>
				<Header />
				<Footer /> 
				{ route }
      </div>
    );
	}
}

export default App;
