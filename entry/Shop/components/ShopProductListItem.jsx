import React, { Component } from 'react'
import { Link } from 'react-router'
import 'Shop/styles/ShopProductListItem.scss'

export default class ShopProductListItem extends Component {

  render() {
    return (
      <div className="col-md-3 col-sm-6 c-margin-b-20">
        <div className="c-content-product-2 c-bg-white c-border">
          <div className="c-content-overlay">
            {(this.props.isHot)? <div className="c-label c-bg-red c-font-uppercase c-font-white c-font-13 c-font-bold">Hot</div> : null }

            <div className="c-overlay-wrapper">
              <div className="c-overlay-content">
                <a href="shop-product-details-2.html" className="btn btn-md c-btn-grey-1 c-btn-uppercase c-btn-bold c-btn-border-1x c-btn-square">查看商品</a>
              </div>
            </div>
            <div className="c-bg-img-center c-overlay-object" data-height="height" style={{backgroundImage: `url(${this.props.photo})`}}></div>
          </div>
          <div className="c-info">
            <p className="c-title c-font-16 c-font-slim">{this.props.name}</p>
            <p className="c-price c-font-14 c-font-slim">${this.props.price.discount} &nbsp;
              <span className="c-font-14 c-font-line-through c-font-red">${this.props.price.origin}</span>
            </p>
          </div>
          <div className="btn-group btn-group-justified" role="group">
            <div className="btn-group c-border-top" role="group">
              <a href="shop-product-wishlist.html" className="btn btn-sm c-btn-white c-btn-uppercase c-btn-square c-font-grey-3 c-font-white-hover c-bg-red-2-hover c-btn-product">查看詳細</a>
            </div>
            <div className="btn-group c-border-left c-border-top" role="group">
              <a href="shop-cart.html" className="btn btn-sm c-btn-white c-btn-uppercase c-btn-square c-font-grey-3 c-font-white-hover c-bg-red-2-hover c-btn-product">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}