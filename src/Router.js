import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import BeerPage from './components/beer/BeerPage';
import CraftBeerPage from './components/craft-beer/CraftBeerPage';
import CiderPage from './components/cider/CiderPage';
import WinePage from './components/wine/WinePage';
import SpiritsPage from './components/spirits/SpiritsPage';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';


const Router = () => (
    <Switch >
        <Route exact path='/' component={HomePage} />
        <Route exact path='/beer' component={BeerPage} />
        <Route exact path='/craft-beer' component={CraftBeerPage} />
        <Route exact path='/cider' component={CiderPage} />
        <Route exact path='/wine' component={WinePage} />
        <Route exact path='/cider' component={CiderPage} />
        <Route exact path='/spirits' component={SpiritsPage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        
    </Switch>
    
)

export default Router;