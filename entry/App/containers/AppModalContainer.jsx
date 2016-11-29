import React, { Component } from 'react'
import { connect } from 'react-redux'

import MemberLoginModal from 'Member/components/MemberLoginModal'

class AppModalContainer extends Component {
  render() {
    return (
      <div>
        <MemberLoginModal/>
      </div>
    )
  }
}

export default connect()(AppModalContainer);
