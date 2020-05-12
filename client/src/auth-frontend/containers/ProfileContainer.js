import React, { Component } from "react";
import Profile from "../components/Profile/Profile";
import { API_URL } from "../constants";

class ProfileContainer extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    fetch(`${API_URL}/users`, {
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    })
      .then(res => res.json())
      .then(parsedData => this.setState({ user: parsedData.data }))
      .catch(err => console.log(err));
  }

  render() {
    return <Profile user={this.state.user} />;
  }
}

export default ProfileContainer;
