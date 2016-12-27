import React, { Component } from 'react'
import { connect } from 'react-redux'

import MemberOrderItem from 'Member/components/MemberOrderItem'

import { fetchOrderData } from 'Member/actions/OrderActions'

class MemberOrderContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOrderData());
  }

  render() {
    return (
      <div>
        {this.props.orders.data.reverse().map((order, index) => (
          <MemberOrderItem data={order} key={index}/>
        ))}
      </div>
    )
  }
}

export default connect(state => ({
  orders: state.orders,
}))(MemberOrderContainer);
