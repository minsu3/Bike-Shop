import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../component/Header';
import subscribeNow from '../component/subscribeNow';
import findRetailer from '../component/findRetailer';
import signIn from '../component/signIn';
import bikes from '../component/bikes';
import aboutPage from '../component/aboutPage';
import shoppingCart from '../component/shoppingCart';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={ Header } />
            <Route exact path='/newsletter' component={ subscribeNow } />
            <Route exact path='/findretailer' component={ findRetailer } />
            <Route exact path='/userauth' component={ signIn } />
            <Route exact path='/bikes' component={ bikes } />
            <Route exact path='/about' component={ aboutPage } />
            <Route exact path='/shoppingcart' component={ shoppingCart } />
            
        </Switch>
    </div>
)