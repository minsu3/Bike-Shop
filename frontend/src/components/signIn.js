import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Routes from "../register/config/routes";
import NavBar from "../register/components/Layout/NavBar";

class signIn extends Component {
    
  state = {
    currentUser: localStorage.getItem("uid")
  };

  setCurrentUser = token => {
    this.setState({ currentUser: token });
    localStorage.setItem("uid", token);
  };

  logout = () => {
    // Handle Logout
    localStorage.removeItem("uid");
    this.setState({ currentUser: null });
    this.props.history.push("/userauth/login");
  };

  render() {
    return (
      <div>
        <auth />
        <NavBar currentUser={this.state.currentUser} logout={this.logout} />
        <div className="container">
          <Routes
            currentUser={this.state.currentUser}
            setCurrentUser={this.setCurrentUser}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(signIn);