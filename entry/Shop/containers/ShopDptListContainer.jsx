import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShopDptList from 'Shop/components/ShopDptList'

import handleDptData from 'Shop/modules/handleDptData'
class ShopDptListContainer extends Component {

  render(){
    const data = handleDptData({
      activeDptID: this.props.activeDptID,
      activeSubDptID: this.props.activeSubDptID,
      data: this.props.dpts.data
    });
    return <ShopDptList data={data}/>
  }
}

export default connect(state => ({dpts: state.dpts}))(ShopDptListContainer);
