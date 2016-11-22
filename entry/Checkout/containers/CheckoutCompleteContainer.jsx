import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from 'App/components/AppBar'

import CheckoutComplete from 'Checkout/components/CheckoutComplete'

class CheckoutCompleteContainer extends Component {
  render() {
    return (
      <CheckoutComplete
        totalPrice={this.props.cart.totalPrice}
        data={this.props.cart.data}/>
    )
  }
}

export default connect(state => ({
  cart: state.cart
}))(CheckoutCompleteContainer);
