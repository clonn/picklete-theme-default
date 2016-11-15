import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'


import App from 'App/pages/App'
import Shop from 'Shop/pages/Shop'

import ShopProductListContainer from 'Shop/containers/ShopProductListContainer'
import ShopProductDetailContainer from 'Shop/containers/ShopProductDetailContainer'


export default (
  <Route path="/" component={App}>
    <IndexRoute name="home"/>
    <Route path="shop" component={Shop}>
      <Route path="department/:dptID(/:subDptID)" component={ShopProductListContainer}/>
      <Route path="product/:productID" component={ShopProductDetailContainer}/>
    </Route>
  </Route>
);
