import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from 'App/components/AppBar'

import CheckoutInfo from 'Checkout/components/CheckoutInfo'

class CheckoutInfoContainer extends Component {
  render() {
    return (
      <CheckoutInfo
        totalPrice={this.props.cart.totalPrice}
        data={this.props.cart.data}/>
    )
  }
}

export default connect(state => ({
  cart: state.cart
}))(CheckoutInfoContainer);
