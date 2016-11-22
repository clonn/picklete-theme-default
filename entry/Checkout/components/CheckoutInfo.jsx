import React, { Component } from 'react'
import { Link } from 'react-router'
import ShopDptListContainer from 'Shop/containers/ShopDptListContainer'


export default class CheckoutInfo extends Component {
  render() {
    return (
      <form className="c-shop-form-1">
        <div className="row">
          <div className="col-md-7 c-padding-20">
            <h3 className="c-font-bold c-font-uppercase c-font-24">購買人資訊</h3>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="control-label">中文姓名</label>
                    <input type="text" className="form-control c-square c-theme" placeholder="中文姓名"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label className="control-label">公司 / 單位名稱</label>
                <input type="text" className="form-control c-square c-theme" placeholder="公司 / 單位名稱"/>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label className="control-label">地址</label>
                <input type="text" className="form-control c-square c-theme" placeholder="地址"/>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="control-label">Email</label>
                    <input type="email" className="form-control c-square c-theme" placeholder="Email"/>
                  </div>
                  <div className="col-md-6">
                    <label className="control-label">聯絡電話</label>
                    <input type="tel" className="form-control c-square c-theme" placeholder="聯絡電話"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="c-content-bar-1 c-align-left c-bordered c-theme-border c-shadow">
              <h1 className="c-font-bold c-font-uppercase c-font-24">您的訂單</h1>
              <ul className="c-order list-unstyled">
                <li className="row c-margin-b-15">
                  <div className="col-md-6 c-font-20">
                    <h2>商品</h2>
                  </div>
                  <div className="col-md-6 c-font-20">
                    <h2>總價</h2>
                  </div>
                </li>
                <li className="row c-border-bottom"></li>

                {this.props.data.map((item, index) => (
                  <li className="row c-margin-b-15 c-margin-t-15" key={index}>
                    <div className="col-md-6 c-font-20">
                      <a href="shop-product-details.html" className="c-theme-link">{item.name} x {item.quantity}</a>
                    </div>
                    <div className="col-md-6 c-font-20">
                      <p className="">${item.price * item.quantity}</p>
                    </div>
                  </li>
                ))}

                <li className="row c-margin-b-15 c-margin-t-15">
                  <div className="col-md-6 c-font-20">商品總價</div>
                  <div className="col-md-6 c-font-20">
                    <p className="">$
                      <span className="c-subtotal">{this.props.totalPrice}</span>
                    </p>
                  </div>
                </li>
                <li className="row c-border-top c-margin-b-15"></li>
                <li className="row c-margin-b-15 c-margin-t-15">
                  <div className="col-md-6 c-font-20">運費</div>
                  <div className="col-md-6 c-font-20">
                    <p className="">$
                      <span className="c-subtotal">10</span>
                    </p>
                  </div>
                </li>
                <li className="row c-margin-b-15 c-margin-t-15">
                  <div className="col-md-6 c-font-20">
                    <p className="c-font-30">結帳總價</p>
                  </div>
                  <div className="col-md-6 c-font-20">
                    <p className="c-font-bold c-font-30">$
                      <span className="c-shipping-total">{this.props.totalPrice + 10}</span>
                    </p>
                  </div>
                </li>
                <li className="row">
                  <div className="form-group col-md-12" role="group">
                    <Link to="/checkout/complete" type="submit" className="btn btn-lg c-theme-btn c-btn-square c-btn-uppercase c-btn-bold">送出訂單</Link>
                    <Link to="/cart" className="btn btn-lg btn-default c-btn-square c-btn-uppercase c-btn-bold">取消</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
