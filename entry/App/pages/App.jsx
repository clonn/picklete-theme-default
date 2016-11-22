import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from 'App/components/AppBar'

import 'vendor/vendor.scss'
import 'App/styles/App.scss'
import { fetchAPI } from 'Shop/actions/DptActions'

import handleDptData from 'Shop/modules/handleDptData'


class App extends Component {
  componentDidMount() {
    this.fetchAPI();
  }
  fetchAPI() {
    this.props.dispatch(fetchAPI());
  }

  render() {
    const depts = handleDptData({
      activeDptID: this.props.params.dptID,
      activeSubDptID: this.props.params.subDptID,
      data: this.props.dpts.data
    });
    return (
      <div className="c-layout-header-fixed c-layout-header-mobile-fixed c-layout-header-topbar c-layout-header-topbar-collapse c-page-on-scroll">
        <AppBar dpts={depts} cartItemsNumber={this.props.cart.data.length}/>
        <div className="page-container c-layout-page">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  dpts: state.dpts,
  cart: state.cart
}))(App);
