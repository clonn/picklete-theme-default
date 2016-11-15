import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShopProductDetail from 'Shop/components/ShopProductDetail'

import { fetchDetailAPI } from 'Shop/actions/ProductActions'

class ShopProductDetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDetailAPI(this.props.params.productID));
  }

  render() {
    const product = this.props.products.detail[this.props.params.productID];

    return (product && product.status == 'success')? (
      <ShopProductDetail {...this.props.products.detail[this.props.params.productID].data}/>
    ) : (
      <div/>
    )
  }
}

export default connect(state => ({products: {detail: state.products.detail}}))(ShopProductDetailContainer);
