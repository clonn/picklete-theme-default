import React, { Component } from 'react'
import ShopDptListContainer from 'Shop/containers/ShopDptListContainer'

class Checkout extends Component {
  render() {
    const { lang } = this.props;
    return (
      <div>
        <div className="c-layout-breadcrumbs-1 c-subtitle c-fonts-uppercase c-fonts-bold c-bordered c-bordered-both">
          <div className="container">
            <div className="c-page-title c-pull-left">
              <h3 className="c-font-uppercase c-font-sbold">{lang('結帳購買')}</h3>
            </div>
            {/*<ul className="c-page-breadcrumbs c-theme-nav c-pull-right c-fonts-regular">
              <li>
                <a href="shop-product-grid.html">結帳購買</a>
              </li>
              <li>/</li>
              <li className="c-state_active">結帳資訊</li>
            </ul>*/}
          </div>
        </div>
        <div className="container">
          <div className="c-content-box c-size-lg">
            <div className="container">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Cart')(Checkout)

