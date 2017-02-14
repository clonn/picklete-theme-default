import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"

import AppBar from 'App/components/AppBar'
import CheckoutComplete from 'Checkout/components/CheckoutComplete'
import { cleanCart } from 'Cart/actions/CartActions'

import { browserHistory } from 'react-router'


class CheckoutCompleteContainer extends Component {
  componentWillMount() {
    if (localStorage.checkout) {
      this.data = JSON.parse(localStorage.checkout);
      localStorage.removeItem('checkout');
    } else {
      browserHistory.push('/');
    }
  }

  componentDidMount() {
    this.props.dispatch(cleanCart());
  }

  render() {
    return (
      <div>
        <Helmet title="Picklete - 結帳購買 - 結帳完成"/>
        {this.data && (
          <CheckoutComplete {...this.data} buyDate={moment(new Date()).format('YYYY-MM-DD')}/>
        )}   
      </div>
    );
  }
}
export default connect()(CheckoutCompleteContainer);
