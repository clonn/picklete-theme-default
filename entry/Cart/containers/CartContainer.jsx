import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from 'App/components/AppBar'

import CartComponent from 'Cart/components/CartComponent'
import { removeItem as removeCartItem, changeItemQuantity as changeCartItemQuantity } from 'Cart/actions/CartActions'

class CartContainer extends Component {
  dispatchRemoveCartItem = (index) => {
    this.props.dispatch(removeCartItem(index));
  }

  dispatchChangeCartItemQuantity = (index, quantity) => {
    this.props.dispatch(changeCartItemQuantity(index, quantity));
  }

  render() {
    return (
      <CartComponent
        totalPrice={this.props.cart.totalPrice}
        data={this.props.cart.data}
        shippingFee={this.props.checkout.shippingFee}
        dispatchRemoveCartItem={this.dispatchRemoveCartItem}
        dispatchChangeCartItemQuantity={this.dispatchChangeCartItemQuantity}/>
    )
  }
}

export default connect(state => ({
  cart: state.cart,
  checkout: state.checkout
}))(CartContainer);
