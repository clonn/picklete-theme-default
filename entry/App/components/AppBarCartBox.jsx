import React, { Component } from 'react'
import { Link } from 'react-router'
import 'App/Styles/AppBarCartBox.scss'

export default class AppBarCartBox extends Component {
  render() {
    return (
      <div className="c-cart-menu">
        <div className="c-cart-menu-title">
          <p className="c-cart-menu-float-l c-font-sbold">{this.props.data.length} 種商品</p>
          <p className="c-cart-menu-float-r c-theme-font c-font-sbold">${this.props.totalPrice}</p>
        </div>
        <ul className="c-cart-menu-items">
          {this.props.data.map((item, index) => (
            <li key={index}>
              <div className="c-cart-menu-close">
                <a onClick={this.props.dispatchRemoveCartItem.bind(null, index)} href="javascript:;" className="c-theme-link">×</a>
              </div>
              <img src={item.photo}/>
              <div className="c-cart-menu-content">
                <Link to={`/shop/product/${item.id}`} onClick={this.props.closeDropdown} className="c-item-name c-font-sbold">{item.name}</Link>
                <p>{item.quantity} x <span className="c-item-price c-theme-font">${item.price}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="c-cart-menu-footer">
          <Link to="/cart" onClick={this.props.closeDropdown} className="btn btn-md c-btn c-btn-square c-btn-grey-3 c-font-white c-font-bold c-center c-font-uppercase">查看購物車</Link>
          <Link to="/checkout/information" onClick={this.props.closeDropdown} className="btn btn-md c-btn c-btn-square c-theme-btn c-font-white c-font-bold c-center c-font-uppercase">結帳購買</Link>
        </div>
      </div>
    )
  }
}
