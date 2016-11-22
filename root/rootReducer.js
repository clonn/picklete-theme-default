import {combineReducers} from 'redux'
import composeReducers from 'generic/modules/ReducerComposer'

import dpts from 'Shop/reducers/DptReducers'
import products from 'Shop/reducers/ProductReducers'
import cart from 'Cart/reducers/CartReducers'

export default combineReducers({
  dpts,
  products,
  cart
});
