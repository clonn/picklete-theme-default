import React, { Component } from 'react'
import { Link } from 'react-router'
import queryString from 'query-string'
import 'Shop/styles/ShopProductListItem.scss'

export default class ShopProductListItem extends Component {
  getCartItemData() {
    return {
      id: this.props.id,
      name: this.props.name,
      photo: this.props.photo,
      quantity: 1,
      price: this.props.price.discount
    }
  }

  render() {
    const dptQuery = queryString.stringify({
      dptID: this.props.dptID,
      subDptID: this.props.subDptID
    });
    return (
      <div className="col-md-3 col-sm-6 c-margin-b-20">
        <div className="c-content-product-2 c-bg-white c-border">
          <div className="c-content-overlay">
            {(this.props.isHot) && (
              <div className="c-label c-bg-red c-font-uppercase c-font-white c-font-13 c-font-bold">Hot</div>
            )}

            <div className="c-overlay-wrapper">
              <div className="c-overlay-content">
                <Link to={`/shop/product/${this.props.id}?${dptQuery}`} className="btn btn-md c-btn-grey-1 c-btn-uppercase c-btn-bold c-btn-border-1x c-btn-square">查看商品</Link>
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
              <Link to={`/shop/product/${this.props.id}?${dptQuery}`} className="btn btn-sm c-btn-white c-btn-uppercase c-btn-square c-font-grey-3 c-font-white-hover c-bg-red-2-hover c-btn-product">查看詳細</Link>
            </div>
            <div className="btn-group c-border-left c-border-top" role="group">
              <a onClick={this.props.dispatchAddCartItem.bind(null, this.getCartItemData())} href="javascript:;" className="btn btn-sm c-btn-white c-btn-uppercase c-btn-square c-font-grey-3 c-font-white-hover c-bg-red-2-hover c-btn-product">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
