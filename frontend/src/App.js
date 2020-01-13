import React, {Component} from 'react';
import Header from './component/Header';
import route from './config/route';
import { Link } from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <ul> 
          <li>
            <Link to={'/newsletter'} className="firstNav">Subscribe for a newsletter!</Link>
          </li>
          <li>
            <Link to={'/findretailer'} className="firstNav">Find a retailer</Link>
          </li>
          <li>
            <Link to={'/userauth'} className="firstNav">Sign-In</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/bikes"} className="secondNav">Bikes</Link>
          </li>
          <li>
            <Link to={"/about"} className="secondNav">About Us</Link>
          </li>
        </ul>
        <span>
          <Header />
        </span>
      </div>


    );
  }
}

export default App;
