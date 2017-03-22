import React, { Component } from 'react'
import { Link } from 'react-router'
import 'App/styles/AppBarCartBox.scss'

class AppBarCartBox extends Component {
  render() {
    const { lang } = this.props;
    return (
      <div className="c-cart-menu">
        <div className="c-cart-menu-title">
          <p className="c-cart-menu-float-l c-font-sbold">{lang('{{typesCount}} 種商品', {typesCount: this.props.data.length})}</p>
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
                <p>{item.quantity} x <span className="c-item-price c-theme-font">${item.price}</span></p>
              </div>
            </li>
          ))}
          {this.props.data.length == 0 && (
            <li>{lang('購物車中沒有商品')}</li>
          )}
        </ul>
        {this.props.data.length != 0 && (
          <div className="c-cart-menu-footer">
            <Link to="/cart" onClick={this.props.closeDropdown} className="btn btn-md c-btn c-btn-square c-btn-grey-3 c-font-white c-font-bold c-center c-font-uppercase">{lang('查看購物車')}</Link>
            <button onClick={this.props.goCheckout} className="btn btn-md c-btn c-btn-square c-theme-btn c-font-white c-font-bold c-center c-font-uppercase">{lang('結帳購買')}</button>
          </div>
        )}
      </div>
    );
  }
}

export default translate('App/AppBarCart')(AppBarCartBox)
