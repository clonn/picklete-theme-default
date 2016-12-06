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
        data={this.props.cart.data}
        dispatchCheckout={this.dispatchCheckout}/>
    )
  }
}

export default connect(state => ({
  cart: state.cart
}))(CheckoutInfoContainer);
