import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password: '',
    errors: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = this.state;
    axios.post(`${API_URL}/auth/register`, newUser)
      .then(res => this.props.history.push('/login'))
      .catch(err => {
        console.log(err.response);
        this.setState({ errors: err.response.data.errors });
      });
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}