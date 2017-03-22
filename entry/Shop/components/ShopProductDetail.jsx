import React, { Component } from 'react'
import ShopProductDetailPhotos from 'Shop/components/ShopProductDetailPhotos'
import ShopProductDetailQuantity from 'Shop/components/ShopProductDetailQuantity'
import ShopProductDetailTabs from 'Shop/components/ShopProductDetailTabs'
import InnerHtml from 'generic/components/InnerHtml'

import 'Shop/styles/ShopProductDetail.scss'

class ShopProductDetail extends Component {
  state = {
    quantity: 1
  }

  handleChangeQuantity = (quantity) => {
    this.setState({
      quantity
    });
  }

  getCartItemData() {
    return {
      id: this.props.id,
      name: this.props.name,
      photo: this.props.photos[0],
      quantity: this.state.quantity,
      price: this.props.price.discount
    }
  }

  render() {
    const { lang } = this.props;
    return (
      <div>
        <div className="c-shop-product-details-2 c-opt-1">
          <div className="row">
            <div className="col-md-6">
              <ShopProductDetailPhotos photos={this.props.photos}/>
            </div>
            <div className="col-md-6">
              <div className="c-product-meta">
                <div className="c-content-title-1">
                  <h3 className="c-font-uppercase c-font-bold">{this.props.name}</h3>
                  <div className="c-line-left"></div>
                </div>
                <div className="c-product-price">${this.props.price.discount}</div>
                <InnerHtml className="c-product-short-desc" html={this.props.description}/>
                <div className="c-product-add-cart c-margin-t-20">
                  <div>{lang('購買數量')}：</div>
                  <ShopProductDetailQuantity onChange={this.handleChangeQuantity}/>
                  <button 
                    onClick={this.props.dispatchAddItem.bind(null, this.getCartItemData())} 
                    className="btn c-btn btn-lg c-font-bold c-font-white c-theme-btn c-btn-square c-font-uppercase">
                    {lang('加入購物車')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-content-box c-size-md c-no-padding c-margin-t-60">
          <ShopProductDetailTabs characteristic={this.props.characteristic} specification={this.props.specification}/>
        </div>
      </div>
    )
  }
}

export default translate('Shop/ShopProductDetail')(ShopProductDetail)
