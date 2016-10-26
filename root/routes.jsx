import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'


import App from 'App/pages/App'
import Shop from 'Shop/pages/Shop'

import ShopProductListContainer from 'Shop/containers/ShopProductListContainer'

export default (
  <Route path="/" component={App}>
    <IndexRoute name="home"/>
    <Route path="shop" component={Shop}>
      <Route path=":dptID(/:subDptID)" component={ShopProductListContainer}/>
    </Route>
  </Route>
);

      // <Route path=":bigType/:smallType/:id" component={ShopListContainer}/>
