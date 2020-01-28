import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import subscribeNow from '../components/subscribeNow';
import findRetailer from '../components/findRetailer';
import signIn from '../components/signIn';
import BikeMakesContainer from "../containers/BikeMakesContainer";
import aboutPage from '../components/aboutPage';
import shoppingCart from '../components/shoppingCart';
import BikeSpecsContainer from '../containers/BikeSpecsContainer';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/newsletter" component={subscribeNow} />
      <Route path="/findretailer" component={findRetailer} />
      <Route path="/userauth" component={signIn} />
      <Route exact path="/bikes" component= {BikeMakesContainer} />
      <Route path="/bikes/specialized" component={BikeSpecsContainer} />
      <Route path="/bikes/trek" component={BikeSpecsContainer} />
      <Route path="/bikes/cannondale" component={BikeSpecsContainer} />
      <Route path="/aboutus" component={aboutPage} />
      <Route exact path="/shoppingcart" component={shoppingCart} />
    </Switch>
  </div>
);