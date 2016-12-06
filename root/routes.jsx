import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'


import App from 'App/pages/App'
import Shop from 'Shop/pages/Shop'
import Cart from 'Cart/pages/Cart'
import Checkout from 'Checkout/pages/Checkout'
import MemberInfo from 'Member/pages/MemberInfo'

import ShopProductListContainer from 'Shop/containers/ShopProductListContainer'
import ShopProductDetailContainer from 'Shop/containers/ShopProductDetailContainer'

import CartContainer from 'Cart/containers/CartContainer'
import CheckoutInfoContainer from 'Checkout/containers/CheckoutInfoContainer'
import CheckoutCompleteContainer from 'Checkout/containers/CheckoutCompleteContainer'

import MemberRegister from 'Member/components/MemberRegister'

export default (
  <Route path="/" component={App}>
    <IndexRoute name="home"/>
    <Route path="shop" component={Shop}>
      <Route path="department/:dptID(/:subDptID)" component={ShopProductListContainer}/>
      <Route path="product/:productID" component={ShopProductDetailContainer}/>
    </Route>
    <Route path="cart" component={Cart}>
      <IndexRoute component={CartContainer}/>
    </Route>
    <Route path="checkout" component={Checkout}>
      <Route path="information" component={CheckoutInfoContainer}/>
      <Route path="complete" component={CheckoutCompleteContainer}/>
    </Route>
    <Route path="member" compoent={MemberInfo}>
      <Route path="register" component={MemberRegister}/>
    </Route>

  </Route>
);
