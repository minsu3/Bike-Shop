import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import subscribeNow from '../components/subscribeNow';
import findRetailer from '../components/findRetailer';
import signIn from '../components/signIn';
import BikeMakesContainer from "../containers/BikeMakesContainer";
import AboutPage from '../components/AboutPage';
import ShoppingCart from '../components/ShoppingCart';
import BikeDetailsContainer from '../containers/BikeDetailsContainer';
import GetOneBike from '../components/GetOneBike';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/home" component={ Home } />
      <Route path="/newsletter" component={ subscribeNow } />
      <Route path="/findretailer" component={ findRetailer } />
      <Route path="/userauth" component={ signIn } />
      <Route exact path="/bikes" component= { BikeMakesContainer } />
      <Route path="/bikes/:brand/:bike_name" render={(props) => {
        return <GetOneBike bike_name={props.match.params.bike_name}/>
      }} />
      <Route exact path="/shoppingcart" component={ ShoppingCart } />
      <Route path="/shoppingcart/:brand/:bike_name" render={(props) => {
        return <ShoppingCart bike_name={props.match.params.bike_name} />
      }} />
      <Route path="/bikes/:brand" render={(props) => {
        return <BikeDetailsContainer brand={props.match.params.brand} />
      }} /> 
      <Route path="/aboutus" component={ AboutPage} />
      
    </Switch>
  </div>
);