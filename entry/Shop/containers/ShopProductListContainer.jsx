import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShopProductListItem from 'Shop/components/ShopProductListItem'
import Helmet from "react-helmet"

import { addItem as addCartItem } from 'Cart/actions/CartActions'

class ShopProductListContainer extends Component {
  dispatchAddCartItem = (item) => {
    this.props.dispatch(addCartItem(item));
  }

  render() {
    let data = this.props.products.list.data;
    const {dptID, subDptID} = this.props.params;

    if (subDptID) {
      data = data.filter((product) => product.subDpt.includes(parseInt(subDptID)));
    } else {
      data = data.filter((product) => product.dpt.includes(parseInt(dptID)));
    }
    
    let titleStr = 'Picklete - 商品訂購'
    if (this.props.dpts.status == "success") {
      const dpt = this.props.dpts.data.filter(dpt => dpt.id == dptID)[0];
      const subDpt = (subDptID)? dpt.DptSubs.filter(sd => sd.id == subDptID)[0] : null;
      titleStr += ` - ${dpt.name} ${(subDptID)? ` - ${subDpt.name}` : ''}`;
    }
    
    return (
      <div className="c-bs-grid-small-space">
        <Helmet title={titleStr}/>
        <div className="row">
          {data.map((product, index) => (
            <ShopProductListItem {...product} key={index} dptID={dptID} subDptID={subDptID} dispatchAddCartItem={this.dispatchAddCartItem}/>
          ))}
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  dpts: state.dpts,
  products: {
    list: state.products.list
  }
}))(ShopProductListContainer);
