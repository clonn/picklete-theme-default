import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import CheckoutInfo from 'Checkout/components/CheckoutInfo'
import { checkout } from 'Checkout/actions/CheckoutActions'

class CheckoutInfoContainer extends Component {
  componentWillMount() {
    if (!this.props.member.status) {
      browserHistory.push('/');
    }
  }
  
  dispatchCheckout = (data) => {
    data.orderItems = this.props.cart.data.map(item => ({
      ProductId: item.id,
      quantity: item.quantity,
      name: item.name,
      description: '',
      price: item.price
    }))
    data.shipment.shippingFee = this.props.checkout.shippingFee.fee;
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
