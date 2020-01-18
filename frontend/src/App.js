import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import route from './config/route'

class App extends Component {
	render() {
		return (
      <div>

				<Header />
				
				{ route }

				{/* <header /> */}

      </div>
    );
	}
}

export default App;
