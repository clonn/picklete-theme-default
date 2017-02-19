import React, { Component } from 'react'
import { connect } from 'react-redux'

import MemberLoginModal from 'Member/components/MemberLoginModal'
import MemberTermsModal from 'Member/components/MemberTermsModal'

class AppModalContainer extends Component {
  render() {
    return (
      <div>
        <MemberLoginModal/>
        <MemberTermsModal/>
      </div>
    )
  }
}

export default connect()(AppModalContainer);
