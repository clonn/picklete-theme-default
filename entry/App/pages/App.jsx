import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from 'App/components/AppBar'
import AppModalContainer from 'App/containers/AppModalContainer'
import AppNotificationContainer from 'App/containers/AppNotificationContainer'

import 'vendor/vendor.scss'
import 'App/styles/App.scss'
import { fetchAPI } from 'Shop/actions/DptActions'

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
    this.fetchAPI();
  }
  fetchAPI() {
    this.props.dispatch(fetchAPI());
  }

  render() {
    return (
      <div>
        <div className="c-layout-header-fixed c-layout-header-mobile-fixed c-layout-header-topbar c-layout-header-topbar-collapse c-page-on-scroll">
          <AppBar cartItemsNumber={this.props.cart.data.length}/>
          <div className="page-container c-layout-page">
            {this.props.children}
          </div>
        </div>
        <AppModalContainer/>
        <AppNotificationContainer/>
      </div>

    )
  }
}

export default connect(state => ({
  cart: state.cart
}))(App);
