import React, { Component } from 'react'
import { Link } from 'react-router'
import zipCodeData from 'Checkout/constants/zipCodeData'
import 'Checkout/styles/CheckoutInfo.scss'

export default class CheckoutInfo extends Component {
  state = {
    paymentMethod: 'Credit',
    orderItems: [],
    shippingRegion: '台灣本島',
    user: {
      username: '',
      mobile: '',
      taxId: '',
      zipcode: '100',
      city: '台北市',
      region: '中正區',
      address: ''
    },
    shipment: {
      username: '',
      mobile: '',
      email: '',
      zipcode: '100',
      city: '台北市',
      region: '中正區',
      address: '',
      shippingType: 'colddelivery',
      shippingRegion: '台灣本島',
      taxId: '',
      shippingFee: 140
    },
    invoice: {
      type: 'duplex',
      taxId: '',
      title: ''
    }
  }

  _refs = {
    user: {},
    shipment: {}
  }

  autoFillInfoFromMemberData(memberData) {
    this.setState({
      user: Object.assign(this.state.user, memberData),
      shipment: Object.assign(this.state.shipment, memberData),
    });
  }

  componentWillReceiveProps(nextProps) {
    if (_.isEmpty(this.props.memberData) && !_.isEmpty(nextProps.memberData)) {
      this.autoFillInfoFromMemberData(nextProps.memberData);
    }
  }

  componentDidMount() {
    if (!_.isEmpty(this.props.memberData)) {
      this.autoFillInfoFromMemberData(this.props.memberData);
    }
  }

  handleCityChange = (type, event) => {
    this.setState({
      [type]: {
        ...this.state[type],
        city: event.target.value
      }
    }, () => {
      this.setState({
        [type]: {
          ...this.state[type],
          region: this._refs[type].region.value
        }
      });
    });
  }

  handleDistrictChange = (type, event) => {
    this.setState({
      [type]: {
        ...this.state[type],
        region: event.target.value
      }
    });
  }

  handleStateChange = (type, column, event) => {
    this.setState({
      [type]: {
        ...this.state[type],
        [column]: event.target.value
      }
    });
  }

  render() {
    const citys = Object.keys(zipCodeData);
    const userRegions = Object.keys(zipCodeData[this.state.user.city]);
    const shipmentRegions = Object.keys(zipCodeData[this.state.shipment.city]);
    const userZipCode = zipCodeData[this.state.user.city][this.state.user.region];
    const shipmentZipCode = zipCodeData[this.state.shipment.city][this.state.shipment.region];
    const shippingFee = (this.props.totalPrice >= this.props.shippingFee.freeShipping)? 0 : this.props.shippingFee.fee;

    return (
      <div className="c-shop-form-1">
        <div className="row">
          <div className="col-md-7 c-padding-20">
            <h3 className="c-font-bold c-font-uppercase c-font-24">購買人資訊</h3>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="control-label">中文姓名</label>
                    <input value={this.state.user.username} onChange={this.handleStateChange.bind(null, 'user', 'username')} type="text" className="form-control c-square c-theme" placeholder="中文姓名"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="control-label">性別</label>
                    <select className="form-control c-square c-theme">
                      <option value="male">男</option>
                      <option value="female">女</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="control-label">手機號碼</label>
                <input value={this.state.user.mobile} onChange={this.handleStateChange.bind(null, 'user', 'mobile')} type="text" className="form-control c-square c-theme" placeholder="手機號碼"/>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-4">
                <label className="control-label">聯絡地址</label>
                <select value={this.state.user.city} onChange={this.handleCityChange.bind(null, 'user')} className="form-control c-square c-theme">
                  {citys.map((city, index) => (
                    <option value={city} key={index}>{city}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <select value={this.state.user.region} onChange={this.handleStateChange.bind(null, 'user', 'region')} ref={ref => this._refs.user.region = ref} className="form-control c-square c-theme address-options">
                  {userRegions.map((region, index) => (
                    <option value={region} key={index}>{region}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <input value={userZipCode} type="text" className="form-control c-square c-theme address-options" placeholder="郵遞區號" readOnly/>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <input value={this.state.user.address} onChange={this.handleStateChange.bind(null, 'user', 'address')} type="text" className="form-control c-square c-theme" placeholder="請輸入詳細地址"/>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label className="control-label">備註</label>
                <textarea className="buyer-remark form-control c-square c-theme" placeholder="請輸入備註..."/>
              </div>
            </div>
            <h3 className="c-font-bold c-font-uppercase c-font-24">收件人資訊</h3>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label className="control-label">中文姓名</label>
                    <input value={this.state.shipment.username} onChange={this.handleStateChange.bind(null, 'shipment', 'username')} type="text" className="form-control c-square c-theme" placeholder="中文姓名"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="control-label">手機號碼</label>
                <input value={this.state.shipment.mobile} onChange={this.handleStateChange.bind(null, 'shipment', 'mobile')} type="text" className="form-control c-square c-theme" placeholder="手機號碼"/>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-4">
                <label className="control-label">收件地址</label>
                <select value={this.state.shipment.city} onChange={this.handleCityChange.bind(null, 'shipment')} className="form-control c-square c-theme">
                  {citys.map((city, index) => (
                    <option value={city} key={index}>{city}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <select value={this.state.shipment.region} onChange={this.handleStateChange.bind(null, 'shipment', 'region')} ref={ref => this._refs.shipment.region = ref} className="form-control c-square c-theme address-options">
                  {shipmentRegions.map((region, index) => (
                    <option value={region} key={index}>{region}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <input value={shipmentZipCode} type="text" className="form-control c-square c-theme address-options" placeholder="郵遞區號" readOnly/>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <input value={this.state.shipment.address} onChange={this.handleStateChange.bind(null, 'shipment', 'address')} type="text" className="form-control c-square c-theme" placeholder="請輸入詳細地址"/>
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

                {this.props.cartData.map((item, index) => (
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
                    <p className="c-subtotal">{(shippingFee == 0)? '免運費' : `$${shippingFee}`}
                    </p>
                  </div>
                </li>
                <li className="row c-margin-b-15 c-margin-t-15">
                  <div className="col-md-6 c-font-20">
                    <p className="c-font-30">結帳總價</p>
                  </div>
                  <div className="col-md-6 c-font-20">
                    <p className="c-font-bold c-font-30">$
                      <span className="c-shipping-total">{this.props.totalPrice + shippingFee}</span>
                    </p>
                  </div>
                </li>
                <li className="row">
                  <div className="form-group col-md-12" role="group">
                    <button onClick={this.props.dispatchCheckout.bind(null, this.state)} className="btn btn-lg c-theme-btn c-btn-square c-btn-uppercase c-btn-bold">送出訂單</button>
                    <Link to="/cart" className="btn btn-lg btn-default c-btn-square c-btn-uppercase c-btn-bold">取消</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
