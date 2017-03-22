import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ShopProductListItem from 'Shop/components/ShopProductListItem'
import { addItem as addCartItem } from 'Cart/actions/CartActions'

class HomeMostPopularContainer extends React.Component {
  dispatchAddCartItem = (item) => {
    this.props.dispatch(addCartItem(item));
  }
  
  render () {
    const { lang } = this.props;
    let data = this.props.products.list.data.slice(0, 6);
    return (
      <div className="c-content-box c-size-md c-overflow-hide c-bs-grid-small-space c-bg-grey-1">
        <div className="container">
          <div className="c-content-title-1">
            <h3 className="c-font-uppercase c-center c-font-bold">{lang('熱門商品', {a: 123})}</h3>
            <div className="c-line-center c-theme-bg"></div>
          </div>
          <div className="row">
            {data.map((product, index) => (
              <ShopProductListItem {...product} key={index} colMd={2} dispatchAddCartItem={this.dispatchAddCartItem}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  products: {
    list: state.products.list
  }
}))(translate('Home')(HomeMostPopularContainer));
