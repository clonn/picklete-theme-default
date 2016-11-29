import {combineReducers} from 'redux'
import composeReducers from 'generic/modules/ReducerComposer'

import dpts from 'Shop/reducers/DptReducers'
import products from 'Shop/reducers/ProductReducers'
import cart from 'Cart/reducers/CartReducers'
import modals from 'App/reducers/ModalReducers'
import member from 'Member/reducers/MemberReducers'

export default combineReducers({
  dpts,
  products,
  cart,
  modals,
  member
});
