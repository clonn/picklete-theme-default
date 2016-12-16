import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from 'App/components/AppBar'

import CheckoutInfo from 'Checkout/components/CheckoutInfo'
import { checkout } from 'Checkout/actions/CheckoutActions'

class CheckoutInfoContainer extends Component {
  dispatchCheckout = (data) => {
    data.orderItems = this.props.cart.data.map(item => ({
      ProductId: item.id,
      quantity: item.quantity,
      name: item.name,
      description: '',
      price: item.price
    }))
    this.props.dispatch(checkout(data));
  }

  render() {
    return (
      <CheckoutInfo
        totalPrice={this.props.cart.totalPrice}
        cartData={this.props.cart.data}
        memberData={this.props.member.data}
        shippingFee={this.props.checkout.shippingFee}
        dispatchCheckout={this.dispatchCheckout}/>
    )
  }
}

export default connect(state => ({
  cart: state.cart,
  member: state.member,
  checkout: state.checkout
}))(CheckoutInfoContainer);
