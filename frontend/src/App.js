import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import route from './config/route'
import NavBar from './components'

class App extends Component {

	state = {
		currentUser: localStorage.getItem('uid');
	};

	setCurrentUser = (token) => {
		this.setState({ currentUser: token })
		localStorage.setItem('uid', token)
	};

	logout = () => {
		// Handle Logout
		localStorage.removeItem('uid')
		this.setState({ currentUser: null })
		this.props.history.push('/login')
	}

	render() {
		return (
      <div>
				<Header />
				{ route }
				<header />

				<NavBar currentUser={this.state.currentUser} logout={this.logout} />
				<div className="container">
					<Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
				</div>
      </div>
    );
	}
}

export default withRouter(App);