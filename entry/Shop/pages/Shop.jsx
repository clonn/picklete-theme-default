import React, { Component } from 'react'
import ShopDptListContainer from 'Shop/containers/ShopDptListContainer'


export default class Shop extends Component {
  render() {
    const dptID = (this.props.params.dptID)? this.props.params.dptID : this.props.location.query.dptID;
    const subDptID = (this.props.params.subDptID)? this.props.params.subDptID : this.props.location.query.subDptID;

    return (
      <div>
        <div className="c-layout-breadcrumbs-1 c-subtitle c-fonts-uppercase c-fonts-bold c-bordered c-bordered-both">
          <div className="container">
            <div className="c-page-title c-pull-left">
              <h3 className="c-font-uppercase c-font-sbold">商品訂購</h3>
            </div>
            <ul className="c-page-breadcrumbs c-theme-nav c-pull-right c-fonts-regular">
              <li>
                <a href="shop-product-grid.html">商品介紹</a>
              </li>
              <li>/</li>
              <li className="c-state_active">-</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <ShopDptListContainer activeDptID={dptID} activeSubDptID={subDptID}/>
          <div className="c-layout-sidebar-content">
            {this.props.children}
          </div>
        </div>
      </div>


    );
  }
}
