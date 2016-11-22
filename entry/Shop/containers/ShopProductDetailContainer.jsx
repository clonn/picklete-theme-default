import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShopProductDetail from 'Shop/components/ShopProductDetail'

import { fetchDetailAPI } from 'Shop/actions/ProductActions'
import { addItem as addCartItem } from 'Cart/actions/CartActions'

class ShopProductDetailContainer extends Component {
  componentDidMount() {
    this.dispatchFetchDetailAPI();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.productID != this.props.params.productID) {
      this.dispatchFetchDetailAPI();
    }
  }

  dispatchFetchDetailAPI() {
    this.props.dispatch(fetchDetailAPI(this.props.params.productID));
  }

  dispatchAddCartItem = (item) => {
    this.props.dispatch(addCartItem(item));
  }

  render() {
    const product = this.props.products.detail[this.props.params.productID];

    return (product && product.status == 'success')? (
      <ShopProductDetail {...this.props.products.detail[this.props.params.productID].data} dispatchAddItem={this.dispatchAddCartItem}/>
    ) : (
      <div/>
    )
  }
}

export default connect(state => ({products: {detail: state.products.detail}}))(ShopProductDetailContainer);
