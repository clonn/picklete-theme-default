import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import AppBarLogo from 'App/components/AppBarLogo'
import AppBarNav from 'App/components/AppBarNav'
import AppBarNavGroup from 'App/components/AppBarNavGroup'
import AppBarNavGroupItem from 'App/components/AppBarNavGroupItem'

import AppBarCartButton from 'App/components/AppBarCartButton'
import AppBarCartBoxContainer from 'App/containers/AppBarCartBoxContainer'

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
                    <AppBarNav title="商品訂購">
                      {this.props.dpts.map((dpt, index) => (
                        <AppBarNavGroup title={dpt.name} key={index}>
                          {dpt.subDpts.map((subDpt, index2) => (
                            <AppBarNavGroupItem title={subDpt.name} url={`/shop/department/${dpt.id}/${subDpt.id}`} active={subDpt.active} key={index2}/>
                          ))}
                        </AppBarNavGroup>
                      ))}
                    </AppBarNav>
                    <AppBarCartButton number={this.props.cartItemsNumber} onClick={this.handleCartBoxToggle}/>
                    <li>
                      <a href="javascript:;" className="c-btn-border-opacity-04 c-btn btn-no-focus c-btn-header btn btn-sm c-btn-border-1x c-btn-dark c-btn-circle c-btn-uppercase c-btn-sbold">
                        登入
                      </a>
                    </li>
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
