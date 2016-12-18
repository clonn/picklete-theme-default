import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootCloseWrapper } from 'react-overlays'
import AppBar from 'App/components/AppBar'

import { loadLocalStorage, removeItem as removeCartItem } from 'Cart/actions/CartActions'
import AppBarCartBox from 'App/components/AppBarCartBox'

class AppBarCartBoxContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadLocalStorage());
  }

  dispatchRemoveCartItem = (index) => {
    this.props.dispatch(removeCartItem(index));
  }

  render() {
    return (
        <AppBarCartBox
          totalPrice={this.props.cart.totalPrice}
          data={this.props.cart.data}
          dispatchRemoveCartItem={this.dispatchRemoveCartItem}
          toggleCartBox={this.props.toggleCartBox}/>
    )
  }
}

export default connect(state => ({
  cart: state.cart
}))(AppBarCartBoxContainer);
