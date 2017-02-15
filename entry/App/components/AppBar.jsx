import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import AppBarLogo from 'App/components/AppBarLogo'
import AppBarNavMember from 'App/components/AppBarNavMember'
import AppBarNavShopContainer from 'App/containers/AppBarNavShopContainer'

import AppBarCartDropdownContainer from 'App/containers/AppBarCartDropdownContainer'
import AppBarLoginButton from 'App/containers/AppBarLoginButton'

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
    const headerClassName = classNames({'c-mega-menu-shown': this.state.mobileMenuActive}, 'c-layout-header', 'c-layout-header-4', 'c-layout-header-default-mobile', 'c-layout-header-fixed', 'app-bar');
    const navClassName = classNames({'c-shown': this.state.mobileMenuActive}, 'c-mega-menu', 'c-pull-right', 'c-mega-menu-dark', 'c-mega-menu-dark-mobile');

    return (
      <div className="c-header-cart-shown">
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
                  
                  {/*<AppBarCartButton mobile number={this.props.cartItemsNumber} onClick={this.handleCartBoxToggle}/>*/}
                </div>
                
                <nav className={navClassName}>
                  <ul className="nav navbar-nav c-theme-nav">
                    <AppBarNavShopContainer/>
                    {this.props.member.status && (
                      <AppBarNavMember/>
                    )}
                    <AppBarCartDropdownContainer/>
                    <AppBarLoginButton/>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
