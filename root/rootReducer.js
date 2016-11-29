import {combineReducers} from 'redux'
import composeReducers from 'generic/modules/ReducerComposer'

import modals from 'App/reducers/ModalReducers'
import notifications from 'App/reducers/NotificationReducers'

import dpts from 'Shop/reducers/DptReducers'
import products from 'Shop/reducers/ProductReducers'
import cart from 'Cart/reducers/CartReducers'
import member from 'Member/reducers/MemberReducers'

export default combineReducers({
  modals,
  notifications,
  dpts,
  products,
  cart,
  member
});
