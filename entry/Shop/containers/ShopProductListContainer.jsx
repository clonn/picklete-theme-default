import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShopProductListItem from 'Shop/components/ShopProductListItem'

import { fetchListAPI } from 'Shop/actions/ProductActions'

class ShopProductListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchListAPI());
  }

  render() {
    let data = this.props.products.list.data;
    const {dptID, subDptID} = this.props.params;

    if (subDptID) {
      data = data.filter((product) => product.subDpt.includes(parseInt(subDptID)));
    } else {
      data = data.filter((product) => product.dpt.includes(parseInt(dptID)));
    }

    return (
      <div className="c-bs-grid-small-space">
        <div className="row">
          {data.map((product, index) => (
            <ShopProductListItem {...product} key={index}/>
          ))}
        </div>
      </div>
    )
  }
}

export default connect(state => ({products: {list: state.products.list}}))(ShopProductListContainer);
