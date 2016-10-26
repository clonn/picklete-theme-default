import {combineReducers} from 'redux'
import composeReducers from 'generic/modules/ReducerComposer'

import dpts from 'Shop/reducers/DptReducers'
import products from 'Shop/reducers/ProductReducers'

export default combineReducers({
  dpts,
  products
});
