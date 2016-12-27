import React, { Component } from 'react'
import classNames from 'classnames'

import 'Member/styles/MemberOrderItem.scss'

const lang = {
  Credit: '信用卡',
  new: '新訂單',
  duplex: '兩聯式發票'
}

class MemberOrderItem extends Component {
  state = {
    openDetail: false
  }

  handleToggleDetail = () => {
    this.setState({
      openDetail: !this.state.openDetail
    });
  }

  render () {
    return (
      <div className="order-item">
        <div className="order-item-bar" onClick={this.handleToggleDetail}>
          <div>{moment(this.props.data.createdAt).format('YYYY-MM-DD')}</div>
          <div>{this.props.data.serialNumber}</div>
          <div>{lang[this.props.data.allPayPaymentType]}</div>
          <div>{lang[this.props.data.status]}</div>
          <div>{moment(this.props.data.updatedAt).format('YYYY-MM-DD')}</div>
          <div>${this.props.data.paymentTotalAmount}</div>
          <div>{lang[this.props.data.invoice.type]}</div>
        </div>
        <div className={classNames('order-item-detail', {open: this.state.openDetail})}>
          <div>收件人姓名：{this.props.data.shipment.username}</div>
          <div>收件人電話：{this.props.data.shipment.mobile}</div>
          <div>收件人地址：{this.props.data.shipment.address}</div>
          <div>付款方式：{lang[this.props.data.allPayPaymentType]}</div>
          <table>
            <tr>
              <td>商品名稱</td>
              <td>數量</td>
              <td>單價</td>
              <td>小計</td>
            </tr>
            {this.props.data.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            ))}
          </table>
          <div className="order-item-total">
            <div>小計：{this.props.data.totalAmount}</div>
            <div>運費：{this.props.data.shipment.shippingFee}</div>
            <div>結帳總計：{this.props.data.paymentTotalAmount}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MemberOrderItem;
