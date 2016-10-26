import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShopProductListItem from 'Shop/components/ShopProductListItem'

import { fetchProductListAPI } from 'Shop/actions/ProductActions'

class ShopProductListContainer extends Component {
  componentDidMount() {
    if (this.props.products.list.status != 'success') {
      this.props.dispatch(fetchProductListAPI());
    }
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
      <div className="c-layout-sidebar-content ">
        <div className="c-bs-grid-small-space">
          <div className="row">
            {data.map((product, index) => (
              <ShopProductListItem {...product} key={index}/>
            ))}
          </div>

        </div>
      </div>
    )
  }
}

export default connect(state => ({products: state.products}))(ShopProductListContainer);
