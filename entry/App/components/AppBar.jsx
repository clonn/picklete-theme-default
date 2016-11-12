import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class AppBar extends Component {
  static defaultProps = {
    dpts: {

    }
  }
  render() {
    return (
      <header className="c-layout-header c-layout-header-4 c-layout-header-default-mobile c-layout-header-fixed app-bar" data-minimize-offset="80">
        <div className="c-navbar">
          <div className="container">
            <div className="c-navbar-wrapper clearfix">
              <div className="c-brand c-pull-left">
                <a href="index.html" className="c-logo">
                  <img src="http://themehats.com/themes/jango/assets/base/img/layout/logos/logo-3.png" alt="JANGO" className="c-desktop-logo"/>
                  <img src="http://themehats.com/themes/jango/assets/base/img/layout/logos/logo-3.png" alt="JANGO" className="c-desktop-logo-inverse"/>
                  <img src="http://themehats.com/themes/jango/assets/base/img/layout/logos/logo-3.png" alt="JANGO" className="c-mobile-logo"/>
                </a>
                <button className="c-hor-nav-toggler" type="button" data-target=".c-mega-menu">
                  <span className="c-line"></span>
                  <span className="c-line"></span>
                  <span className="c-line"></span>
                </button>
                <button className="c-topbar-toggler" type="button">
                  <i className="fa fa-ellipsis-v"></i>
                </button>
                <button className="c-search-toggler" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <form className="c-quick-search" action="#">
                <input type="text" name="query" placeholder="Type to search..." value="" className="form-control" autoComplete="off"/>
                <span className="c-theme-link">&times;</span>
              </form>
              <nav className="c-mega-menu c-pull-right c-mega-menu-dark c-mega-menu-dark-mobile c-fonts-uppercase c-fonts-bold">
                <ul className="nav navbar-nav c-theme-nav">
                  <li>
                    <a href="javascript:;" className="c-link dropdown-toggle">商品訂購
                      <span className="c-arrow c-toggler"></span>
                    </a>
                    <ul className="dropdown-menu c-menu-type-mega c-menu-type-fullwidth" style={{minWidth: 'auto'}}>
                      {this.props.dpts.map((dpt, index) => (
                        <li key={index}>
                          <ul className="dropdown-menu c-menu-type-inline">
                            <li>
                              <h3>{dpt.name}</h3>
                            </li>
                            {dpt.subDpts.map((subDpt, index2) => (
                              <li className={`${(subDpt.active)? 'c-active' : ''}`} key={index2}>
                                <Link to={`/shop/department/${dpt.id}/${subDpt.id}`}>{subDpt.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="c-search-toggler-wrapper">
                    <a href="#" className="c-btn-icon c-search-toggler">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" data-toggle="modal" data-target="#login-form" className="c-btn-border-opacity-04 c-btn btn-no-focus c-btn-header btn btn-sm c-btn-border-1x c-btn-dark c-btn-circle c-btn-uppercase c-btn-sbold">
                      登入
                    </a>
                    </li>
                    <li className="c-quick-sidebar-toggler-wrapper">
                      <a href="#" className="c-quick-sidebar-toggler">
                        <span className="c-line"></span>
                        <span className="c-line"></span>
                        <span className="c-line"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="c-cart-menu">
                <div className="c-cart-menu-title">
                  <p className="c-cart-menu-float-l c-font-sbold">2 item(s)</p>
                  <p className="c-cart-menu-float-r c-theme-font c-font-sbold">$79.00</p>
                </div>
                <ul className="c-cart-menu-items">
                  <li>
                    <div className="c-cart-menu-close">
                      <a href="#" className="c-theme-link">×</a>
                    </div>
                    <img src="http://themehats.com/themes/jango/assets/base/img/content/shop2/24.jpg" />
                    <div className="c-cart-menu-content">
                      <p>1 x
                        <span className="c-item-price c-theme-font">$30</span>
                      </p>
                      <a href="shop-product-details-2.html" className="c-item-name c-font-sbold">Winter Coat</a>
                    </div>
                  </li>
                  <li>
                    <div className="c-cart-menu-close">
                      <a href="#" className="c-theme-link">×</a>
                    </div>
                    <img src="http://themehats.com/themes/jango/assets/base/img/content/shop2/12.jpg" />
                    <div className="c-cart-menu-content">
                      <p>1 x
                        <span className="c-item-price c-theme-font">$30</span>
                      </p>
                      <a href="shop-product-details.html" className="c-item-name c-font-sbold">Sports Wear</a>
                    </div>
                  </li>
                </ul>
                <div className="c-cart-menu-footer">
                  <a href="shop-cart.html" className="btn btn-md c-btn c-btn-square c-btn-grey-3 c-font-white c-font-bold c-center c-font-uppercase">View Cart</a>
                  <a href="shop-checkout.html" className="btn btn-md c-btn c-btn-square c-theme-btn c-font-white c-font-bold c-center c-font-uppercase">Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </header>
      )
    }
  }
