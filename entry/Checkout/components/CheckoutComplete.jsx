import React, { Component } from 'react'
import { Link } from 'react-router'
import ShopDptListContainer from 'Shop/containers/ShopDptListContainer'

class CheckoutComplete extends Component {
  render() {
    const { lang } = this.props; 
    return (
      <div className="c-shop-order-complete-1 c-content-bar-1 c-align-left c-bordered c-theme-border c-shadow">
        <div className="c-content-title-1">
          <h3 className="c-center c-font-uppercase c-font-bold">{lang('訂單結帳完成')}</h3>
          <div className="c-line-center c-theme-bg"></div>
        </div>
        <div className="c-theme-bg">
          <p className="c-message c-center c-font-white c-font-20 c-font-sbold">
            <i className="fa fa-check"/>
            {lang('謝謝，您的訂單已經成功送出。')}
          </p>
        </div>
        <div className="row c-order-summary c-center">
          <ul className="c-list-inline list-inline">
            <li>
              <h3>{lang('訂單編號')}</h3>
              <p>#12345</p>
            </li>
            <li>
              <h3>{lang('購買日期')}</h3>
              <p>{this.props.buyDate}</p>
            </li>
            <li>
              <h3>{lang('結帳總價')}</h3>
              <p>${this.props.cart.totalPrice + this.props.shippingFee}</p>
            </li>
            <li>
              <h3>{lang('付款方式')}</h3>
              <p>{lang('paymentMethod')[this.props.order.paymentMethod]}</p>
            </li>
          </ul>
        </div>
        <div className="c-order-details">
          <div className="c-border-bottom hidden-sm hidden-xs">
            <div className="row">
              <div className="col-md-3">
                <h3 className="c-font-uppercase c-font-16 c-font-grey-2 c-font-bold">{lang('圖片')}</h3>
              </div>
              <div className="col-md-5">
                <h3 className="c-font-uppercase c-font-16 c-font-grey-2 c-font-bold">{lang('簡述')}</h3>
              </div>
              <div className="col-md-2">
                <h3 className="c-font-uppercase c-font-16 c-font-grey-2 c-font-bold">{lang('商品單價')}</h3>
              </div>
              <div className="col-md-2">
                <h3 className="c-font-uppercase c-font-16 c-font-grey-2 c-font-bold">{lang('品項總價')}</h3>
              </div>
            </div>
          </div>

          {this.props.cart.data.map((item, index) => (
            <div className="c-border-bottom c-row-item" key={index}>
              <div className="row">
                <div className="col-md-3 col-sm-12 c-image">
                  <div className="c-content-overlay">
                    <div className="c-overlay-wrapper">
                      <div className="c-overlay-content">
                        <Link to={`/shop/product/${item.id}`} className="btn btn-md c-btn-grey-1 c-btn-uppercase c-btn-bold c-btn-border-1x c-btn-square">{lang('查看商品')}</Link>
                      </div>
                    </div>
                    <div className="c-bg-img-top-center c-overlay-object" data-height="height">
                      <img width="100%" className="img-responsive" src={item.photo}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-8">
                  <ul className="c-list list-unstyled">
                    <li className="c-margin-b-25">
                      <a href="shop-product-details-2.html" className="c-font-bold c-font-22 c-theme-link">{item.name}</a>
                    </li>
                    <li>{lang('購買數量')}: {item.quantity}</li>
                  </ul>
                </div>
                <div className="col-md-2 col-sm-2">
                  <p className="visible-xs-block c-theme-font c-font-uppercase c-font-bold">{lang('商品單價')}</p>
                  <p className="c-font-sbold c-font-uppercase c-font-18">${item.price}</p>
                </div>
                <div className="col-md-2 col-sm-2">
                  <p className="visible-xs-block c-theme-font c-font-uppercase c-font-bold">{lang('品項總價')}</p>
                  <p className="c-font-sbold c-font-18">${item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="c-customer-details row" data-auto-height="true">
            <div className="col-md-6 col-sm-6 c-margin-t-20">
              <div data-height="height">
                <h3 className=" c-margin-b-20 c-font-uppercase c-font-22 c-font-bold">{lang('訂購人資訊')}</h3>
                <ul className="list-unstyled">
                  <li>{lang('姓名')}: {this.props.user.name}</li>
                  <li>{lang('電話')}: {this.props.user.mobile}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 c-margin-t-20">
              <div data-height="height">
                <h3 className=" c-margin-b-20 c-font-uppercase c-font-22 c-font-bold">{lang('運送地址')}</h3>
                <ul className="list-unstyled">
                  <li>{this.props.user.shippingAddress}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Checkout/CheckoutComplete')(CheckoutComplete)
