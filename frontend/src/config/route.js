import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import subscribeNow from '../components/subscribeNow';
import findRetailer from '../components/findRetailer';
import signIn from '../components/signIn';
import BikeContainer from '../containers/BikeContainer';
import aboutPage from '../components/aboutPage';
import shoppingCart from '../components/shoppingCart';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/home' component={ Home } />
            <Route path='/newsletter' component={ subscribeNow } />
            <Route path='/findretailer' component={ findRetailer } />
            <Route path='/userauth' component={ signIn } />
            <Route path='/bikes' component={ BikeContainer } />
            <Route path='/aboutus' component={ aboutPage } />
            <Route path='/shoppingcart' component={ shoppingCart } />
        </Switch>
    </div>
)