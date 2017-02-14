import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import {browserHistory} from 'react-router'

import MemberOrderItem from 'Member/components/MemberOrderItem'

import { fetchOrderData } from 'Member/actions/OrderActions'

class MemberOrderContainer extends Component {
  componentDidMount() {
    if (this.props.member.status) {
      this.props.dispatch(fetchOrderData());
    } else {
      browserHistory.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.member.status) {
      browserHistory.push('/');      
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Picklete - 會員專區 - 訂單管理"/>
        {this.props.orders.data.reverse().map((order, index) => (
          <MemberOrderItem data={order} key={index}/>
        ))}
      </div>
    )
  }
}

export default connect(state => ({
  orders: state.orders,
  member: state.member
}))(MemberOrderContainer);
