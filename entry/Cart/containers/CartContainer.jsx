import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import AppBar from 'App/components/AppBar'
import CartComponent from 'Cart/components/CartComponent'

import { removeItem as removeCartItem, changeItemQuantity as changeCartItemQuantity } from 'Cart/actions/CartActions'
import { changeModalActive } from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

class CartContainer extends Component {
  dispatchRemoveCartItem = (index) => {
    this.props.dispatch(removeCartItem(index));
  }

  dispatchChangeCartItemQuantity = (index, quantity) => {
    this.props.dispatch(changeCartItemQuantity(index, quantity));
  }

  goCheckout = () => {
    if (this.props.member.status) {
      browserHistory.push('/checkout/information');
    } else {
      this.props.dispatch(changeModalActive('login', true));
      this.props.dispatch(addNotification({
        title: '請先登入',
        message: '請先登入再進行結帳',
        type: 'error'
      }));
    }
  }

  render() {
    return (
      <CartComponent
        totalPrice={this.props.cart.totalPrice}
        data={this.props.cart.data}
        shippingFee={this.props.checkout.shippingFee}
        dispatchRemoveCartItem={this.dispatchRemoveCartItem}
        dispatchChangeCartItemQuantity={this.dispatchChangeCartItemQuantity}
        goCheckout={this.goCheckout}/>
    )
  }
}

export default connect(state => ({
  cart: state.cart,
  checkout: state.checkout,
  member: state.member
}))(CartContainer);
