import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import AppBarLogo from 'App/components/AppBarLogo'
import AppBarNavMemberContainer from 'App/containers/AppBarNavMemberContainer'
import AppBarNavShopContainer from 'App/containers/AppBarNavShopContainer'

import AppBarCartDropdownContainer from 'App/containers/AppBarCartDropdownContainer'
import AppBarLoginButton from 'App/containers/AppBarLoginButton'
import AppBarMobileMenu from 'App/components/AppBarMobileMenu'

import { changeModalActive } from 'App/actions/ModalActions'

export default class AppBar extends Component {
  static defaultProps = {
    logo: 'http://themehats.com/themes/jango/assets/base/img/layout/logos/logo-3.png'
  }

  state = {
    mobileMenuActive: false,
  }

  handleMenuToggle = () => {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
      cartBoxActive: false
    })
  }

  render() {
    return (
      <div className="app-bar">
        <header>
          <AppBarLogo img={this.props.logo}/>
          <div className="app-bar-container">
            <div className="navs">
              <AppBarNavShopContainer/>
              {this.props.member.status && (
                <AppBarNavMemberContainer/>
              )}
            </div>
            <AppBarLoginButton/>            
            <AppBarCartDropdownContainer/>
            <AppBarMobileMenu/>
          </div>
        </header>
      </div>
    );
  }
}
