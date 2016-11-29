import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import AppBarLogo from 'App/components/AppBarLogo'
import AppBarNavContainer from 'App/containers/AppBarNavContainer'

import AppBarCartButton from 'App/components/AppBarCartButton'
import AppBarCartBoxContainer from 'App/containers/AppBarCartBoxContainer'
import AppBarLoginButton from 'App/containers/AppBarLoginButton'

import { changeActive } from 'App/actions/ModalActions'

export default class AppBar extends Component {
  static defaultProps = {
    logo: 'http://themehats.com/themes/jango/assets/base/img/layout/logos/logo-3.png'
  }

  state = {
    mobileMenuActive: false,
    cartBoxActive: false
  }

  handleMenuToggle = () => {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
      cartBoxActive: false
    })
  }

  handleCartBoxToggle = () => {
    this.setState({
      cartBoxActive: !this.state.cartBoxActive,
      mobileMenuActive: false
    })
  }

  render() {
    const headerClassName = classNames({'c-mega-menu-shown': this.state.mobileMenuActive}, 'c-layout-header', 'c-layout-header-4', 'c-layout-header-default-mobile', 'c-layout-header-fixed', 'app-bar');
    const navClassName = classNames({'c-shown': this.state.mobileMenuActive}, 'c-mega-menu', 'c-pull-right', 'c-mega-menu-dark', 'c-mega-menu-dark-mobile');

    return (
      <div className={classNames({'c-header-cart-shown': this.state.cartBoxActive})}>
        <header className={headerClassName} data-minimize-offset="80">
          <div className="c-navbar">
            <div className="container">
              <div className="c-navbar-wrapper clearfix">
                <div className="c-brand c-pull-left">
                  <AppBarLogo img={this.props.logo}/>
                  <button className="c-hor-nav-toggler" type="button" data-target=".c-mega-menu" onClick={this.handleMenuToggle}>
                    <span className="c-line"></span>
                    <span className="c-line"></span>
                    <span className="c-line"></span>
                  </button>
                  <AppBarCartButton mobile number={this.props.cartItemsNumber} onClick={this.handleCartBoxToggle}/>
                </div>
                <nav className={navClassName}>
                  <ul className="nav navbar-nav c-theme-nav">
                    <AppBarNavContainer/>
                    <AppBarCartButton number={this.props.cartItemsNumber} onClick={this.handleCartBoxToggle}/>
                    <AppBarLoginButton/>
                  </ul>
                </nav>
              </div>
              <AppBarCartBoxContainer toggleCartBox={this.handleCartBoxToggle}/>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
