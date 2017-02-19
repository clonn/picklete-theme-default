import React, { Component } from 'react';
import { connect } from 'react-redux'
import Helmet from "react-helmet"

class AppDocumentTitleContainer extends Component {
  getRoutePath = () => '/' + _.flatMap(this.props.routes, (obj) => obj.path).slice(1).filter((e) => e).join('/')

  getDocumentTitle() {
    const path = this.getRoutePath();
    switch (path) {
      case '/':
        return ''
      case '/cart':
        return '購物車'
      case '/checkout/complete':
        return '結帳購買 - 結帳完成'
      case '/checkout/information':
        return '結帳購買 - 結帳資訊'
      case '/member/register':
        return '會員專區 - 註冊會員'
      case '/member/orders':
        return '會員專區 - 訂單管理'
      case '/shop/department/:dptID(/:subDptID)':
        return this.getDepartmentPageTitle()
      case '/shop/product/:productID':
        return this.getProductPageTitle()
    }
  }

  getDepartmentPageTitle() {
    let data = this.props.products.list.data;
    const {dptID, subDptID} = this.props.params;

    if (subDptID) {
      data = data.filter((product) => product.subDpt.includes(parseInt(subDptID)));
    } else {
      data = data.filter((product) => product.dpt.includes(parseInt(dptID)));
    }
    
    let titleStr = '商品訂購'
    if (this.props.dpts.status == "success") {
      const dpt = this.props.dpts.data.filter(dpt => dpt.id == dptID)[0];
      const subDpt = (subDptID)? dpt.DptSubs.filter(sd => sd.id == subDptID)[0] : null;
      titleStr += ` - ${dpt.name} ${(subDptID)? ` - ${subDpt.name}` : ''}`;
    }
    return titleStr;
  }

  getProductPageTitle() {
    let product = this.props.products.detail[this.props.params.productID];
    return '商品訂購' + ((product && product.data)? ` - ${product.data.name}` : '');
  }

  render() {
    let title = this.getDocumentTitle();
    title = ((title)? `${title} / ` : '') + (this.props.company.data.name || '');
    return (
      <Helmet title={title}/>
    );
  }
}

export default connect(state => ({
  member: state.member,
  company: state.company,
  products: state.products,
  dpts: state.dpts,
}))(AppDocumentTitleContainer);