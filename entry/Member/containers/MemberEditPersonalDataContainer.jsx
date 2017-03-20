import React, { Component } from 'react'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'
import { updateMemberData } from 'Member/actions/MemberActions'

import MemberEditPersonalData from 'Member/components/MemberEditPersonalData'

import { fetchOrderData } from 'Member/actions/OrderActions'

class MemberEditPersonalDataContainer extends Component {
  dispatchUpdateMemberData = (memberData) => {
    this.props.dispatch(updateMemberData(memberData));
  }

  render() {
    return (
      <div>
        {!_.isEmpty(this.props.member.data) && (
          <MemberEditPersonalData 
            memberData={this.props.member.data}
            dispatchUpdateMemberData={this.dispatchUpdateMemberData}
          />
        )}
      </div>
    )
    
  }
}

export default connect(state => ({
  member: state.member
}))(MemberEditPersonalDataContainer);
