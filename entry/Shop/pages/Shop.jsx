import React, { Component } from 'react'
import ShopDptListContainer from 'Shop/containers/ShopDptListContainer'


export default class Shop extends Component {
  render() {
    return (
      <div>
        <div className="c-layout-breadcrumbs-1 c-subtitle c-fonts-uppercase c-fonts-bold c-bordered c-bordered-both">
          <div className="container">
            <div className="c-page-title c-pull-left">
              <h3 className="c-font-uppercase c-font-sbold">商品訂購</h3>
              <h4 className="">Page Sub Title Goes Here</h4>
            </div>
            <ul className="c-page-breadcrumbs c-theme-nav c-pull-right c-fonts-regular">
              <li>
                <a href="shop-product-grid.html">Product Grid</a>
              </li>
              <li>/</li>
              <li className="c-state_active">Jango Components</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <ShopDptListContainer activeDptID={this.props.params.dptID} activeSubDptID={this.props.params.subDptID}/>
          <div className="c-layout-sidebar-content">
            {this.props.children}
          </div>
        </div>
      </div>


    );
  }
}
