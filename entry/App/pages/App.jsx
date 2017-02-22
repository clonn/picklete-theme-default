import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'
import Helmet from "react-helmet"

import AppBar from 'App/components/AppBar'
import AppFooterContainer from 'App/containers/AppFooterContainer'
import AppModalContainer from 'App/containers/AppModalContainer'
import AppNotificationContainer from 'App/containers/AppNotificationContainer'
import AppDocumentTitleContainer from 'App/containers/AppDocumentTitleContainer'

import { fetchAPI as fetchDptsAPI } from 'Shop/actions/DptActions'
import { fetchListAPI as fetchProductListAPI } from 'Shop/actions/ProductActions'
import { fetchMemberData, autoLogin, logout } from 'Member/actions/MemberActions'
import { getShippingFee } from 'Checkout/actions/CheckoutActions'
import { fetchCompanyAPI } from 'App/actions/GeneralDataActions'

import 'vendor/vendor.scss'
import 'App/styles/App.scss'

class App extends Component {
  static childContextTypes = {
    params: PropTypes.object
  }

  getChildContext() {
    return {
      params: this.props.params
    };
  }

  componentDidMount() {
    this.checkAuthToken();    
    this.props.dispatch(fetchDptsAPI());
    this.props.dispatch(fetchProductListAPI());
    this.props.dispatch(getShippingFee());
    this.props.dispatch(fetchMemberData());
    this.props.dispatch(fetchCompanyAPI());
  }

  checkAuthToken() {
    if (localStorage.token) {
      const decoded = jwtDecode(localStorage.token);
      if ((decoded.exp * 1000) < new Date().getTime()) {
        // token timeout
        this.props.dispatch(logout());
      } else {
        this.props.dispatch(autoLogin());
      }
    }
  }
  
  render() {
    return (
      <div>
        <AppDocumentTitleContainer routes={this.props.routes} params={this.props.params}/>
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
  member: state.member,
  company: state.company
}))(App);
