import React, { Component } from 'react'
import { Link } from 'react-router'
import ShopProductDetailQuantity from 'Shop/components/ShopProductDetailQuantity'

import 'Cart/styles/CartComponent.scss'

export default class CartComponent extends Component {
  handleChangeQuantity = (index, quantity) => {
    this.props.dispatchChangeCartItemQuantity(index, quantity);
  }
  render() {
    const shippingFee = (this.props.totalPrice >= this.props.shippingFee.freeShipping)? 0 : this.props.shippingFee.fee;

    return (
      <div className="c-shop-cart-page-1">
        <div className="row c-cart-table-title">
          <div className="col-md-2 c-cart-image">
            <h3 className="c-font-uppercase c-font-bold c-font-16 c-font-grey-2">圖片</h3>
          </div>
          <div className="col-md-4 c-cart-desc">
            <h3 className="c-font-uppercase c-font-bold c-font-16 c-font-grey-2">簡述</h3>
          </div>
          <div className="col-md-2 c-cart-qty">
            <h3 className="c-font-uppercase c-font-bold c-font-16 c-font-grey-2">數量</h3>
          </div>
          <div className="col-md-1 c-cart-price">
            <h3 className="c-font-uppercase c-font-bold c-font-16 c-font-grey-2">單價</h3>
          </div>
          <div className="col-md-1 c-cart-total">
            <h3 className="c-font-uppercase c-font-bold c-font-16 c-font-grey-2">總價</h3>
          </div>
          <div className="col-md-1 c-cart-remove"></div>
        </div>
        {this.props.data.map((item, index) => (
          <div className="row c-cart-table-row" key={index}>
            <div className="col-md-2 col-sm-3 col-xs-5 c-cart-image">
              <img src={item.photo}/>
            </div>
            <div className="col-md-4 col-sm-9 col-xs-7 c-cart-desc">
              <h3>
                <Link to={`/shop/product/${item.id}`} className="c-font-bold c-theme-link c-font-22 c-font-dark">{item.name}</Link>
              </h3>
              <p className="description">由女子營養大學診療所研究開發的薄鹽味噌湯，將美味與鹽分調整到最佳的平衡點，讓您吃得健康無負擔。</p>
            </div>

            <div className="col-md-2 col-sm-3 col-xs-6 c-cart-qty">
              <p className="c-cart-sub-title c-theme-font c-font-uppercase c-font-bold">數量</p>
              <ShopProductDetailQuantity defaultValue={item.quantity} onChange={this.handleChangeQuantity.bind(null, index)}/>
            </div>
            <div className="col-md-1 col-sm-2 col-xs-3 c-cart-price">
              <p className="c-cart-sub-title c-theme-font c-font-uppercase c-font-bold">單價</p>
              <p className="c-cart-price c-font-bold">${item.price}</p>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-3 c-cart-total">
              <p className="c-cart-sub-title c-theme-font c-font-uppercase c-font-bold">總價</p>
              <p className="c-cart-price c-font-bold">${item.price * item.quantity}</p>
            </div>
            <div className="col-md-1 col-sm-12 c-cart-remove">
              <a onClick={this.props.dispatchRemoveCartItem.bind(null, index)} className="c-theme-link c-cart-remove-desktop" href="javascript:;">×</a>
              <a onClick={this.props.dispatchRemoveCartItem.bind(null, index)} className="c-cart-remove-mobile btn c-btn c-btn-md c-btn-square c-btn-red c-font-uppercase" href="javascript:;">從購物車中移除</a>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="c-cart-subtotal-row c-margin-t-20">
            <div className="col-md-2 col-md-offset-9 col-sm-6 col-xs-6 c-cart-subtotal-border">
              <h3 className="c-font-uppercase c-font-bold c-right c-font-16 c-font-grey-2">商品總價</h3>
            </div>
            <div className="col-md-1 col-sm-6 col-xs-6 c-cart-subtotal-border">
              <h3 className="c-font-bold c-font-16">${this.props.totalPrice}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="c-cart-subtotal-row">
            <div className="col-md-2 col-md-offset-9 col-sm-6 col-xs-6 c-cart-subtotal-border">
              <h3 className="c-font-uppercase c-font-bold c-right c-font-16 c-font-grey-2">運費</h3>
            </div>
            <div className="col-md-1 col-sm-6 col-xs-6 c-cart-subtotal-border">
              <h3 className="c-font-bold c-font-16">{(shippingFee == 0)? '免運費' : `$${shippingFee}`}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="c-cart-subtotal-row">
            <div className="col-md-2 col-md-offset-9 col-sm-6 col-xs-6 c-cart-subtotal-border">
              <h3 className="c-font-uppercase c-font-bold c-right c-font-16 c-font-grey-2">結帳總價</h3>
            </div>
            <div className="col-md-1 col-sm-6 col-xs-6 c-cart-subtotal-border">
              <h3 className="c-font-bold c-font-16">${this.props.totalPrice + shippingFee}</h3>
            </div>
          </div>
        </div>
        <div className="c-cart-buttons">
          <Link to="/shop/department/1" className="btn c-btn btn-lg c-btn-red c-btn-square c-font-white c-font-bold c-font-uppercase c-cart-float-l">繼續購物</Link>
          <Link to="/checkout/information" className="btn c-btn btn-lg c-theme-btn c-btn-square c-font-white c-font-bold c-font-uppercase c-cart-float-r">結帳</Link>
        </div>
      </div>
    )
  }
}
