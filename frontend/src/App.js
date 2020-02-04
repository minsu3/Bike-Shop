import React, { Component } from 'react';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import route from './config/route'

class App extends Component {
	render() {
		return (
      <div>
				<Header />
				{ route }
      </div>
    );
	}
}

export default App;
