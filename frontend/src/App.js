import React, {Component} from 'react';
import Header from './component/Header';
import route from './config/route';
import { NavLink } from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <span>

        <ul> 
          <li>
            <NavLink to={'/newsletter'} className="firstNav" activeClassName="active">Subscribe for a newsletter!</NavLink>
          </li>
          <li>
            <NavLink to={'/findretailer'} className="firstNav" activeClassName="active">Find a retailer</NavLink>
          </li>
          <li>
            <NavLink to={'/userauth'} className="firstNav" activeClassName="active">Sign-In</NavLink>
          </li>
        </ul>
          <ul>
            <li>
              <NavLink to={"/bikes"} className="secondNav" activeClassName="active">Bikes</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="secondNav" activeClassName="active">About Us</NavLink>
            </li>
          </ul>
        </span>
        <div id="header">
          <span>
            <Header />
          </span>
        </div>
        
      </div>
    );
  }
}

export default App;
