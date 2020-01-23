import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import subscribeNow from '../components/subscribeNow';
import findRetailer from '../components/findRetailer';
import signIn from '../components/signIn';
import SpecializedBikesContainer from "../containers/SpecializedBikesContainer";
import TrekBikesContainer from "../containers/TrekBikesContainer";
import CannondaleBikesContainer from "../containers/CannondaleBikesContainer";
import aboutPage from '../components/aboutPage';
import shoppingCart from '../components/shoppingCart';
import BikeContainer from '../containers/BikeContainer';
// import Venge from '../components/Venge';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/newsletter" component={subscribeNow} />
      <Route path="/findretailer" component={findRetailer} />
      <Route path="/userauth" component={signIn} />
      <Route exact path="/bikes" component= {BikeContainer} />
      <Route path="/bikes/specialized" component={SpecializedBikesContainer} />
      {/* <Route path="/bikes/specialized/venge" render={()=> {
          return <Venge img = {this.props.img} />
      }}/> */}
      {/* <Route exact="/shoppingcart/venge" component= {Venge} /> */}
      <Route path="/bikes/trek" component={TrekBikesContainer} />
      <Route path="/bikes/cannondale" component={CannondaleBikesContainer} />
      <Route path="/aboutus" component={aboutPage} />
      <Route exact path="/shoppingcart" component={shoppingCart} />
    </Switch>
  </div>
);