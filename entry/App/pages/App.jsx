import React, { Component } from 'react'
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'

import AppBar from 'App/components/AppBar'

import AppFooterContainer from 'App/containers/AppFooterContainer'
import AppModalContainer from 'App/containers/AppModalContainer'
import AppNotificationContainer from 'App/containers/AppNotificationContainer'

import { fetchAPI as fetchDptsAPI } from 'Shop/actions/DptActions'
import { fetchListAPI as fetchProductListAPI } from 'Shop/actions/ProductActions'
import { fetchMemberData, autoLogin, logout } from 'Member/actions/MemberActions'
import { getShippingFee } from 'Checkout/actions/CheckoutActions'
import { fetchCompanyAPI } from 'App/actions/GeneralDataActions'

import 'vendor/vendor.scss'
import 'App/styles/App.scss'

class App extends Component {
  static childContextTypes = {
    params: React.PropTypes.object
  }

  getChildContext() {
    return {
      params: this.props.params
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchDptsAPI());
    this.props.dispatch(fetchProductListAPI());
    this.props.dispatch(getShippingFee());
    this.checkAuthToken();
    this.props.dispatch(fetchMemberData());
    this.props.dispatch(fetchCompanyAPI());
  }

  checkAuthToken() {
    if (localStorage.token) {
      const decoded = jwtDecode(localStorage.token);
      // console.log('decode.exp:', decoded.exp * 1000);
      // console.log('now:', new Date().getTime());

      if ((decoded.exp * 1000) < new Date().getTime()) {
        console.log('token timeout...');
        this.props.dispatch(logout());
      } else {
        this.props.dispatch(autoLogin());
      }
    }
  }

  render() {
    return (
      <div>
        <div className="c-layout-header-fixed c-layout-header-mobile-fixed c-layout-header-topbar c-layout-header-topbar-collapse c-page-on-scroll">
          <AppBar member={this.props.member} logo={this.props.company.data.logo}/>
          <div className="page-container c-layout-page">
            {this.props.children}
          </div>
        </div>
        <AppFooterContainer/>
        <AppModalContainer/>
        <AppNotificationContainer/>
      </div>
    )
  }
}

export default connect(state => ({
  cart: state.cart,
  member: state.member,
  company: state.company
}))(App);
