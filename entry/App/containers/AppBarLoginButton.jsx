import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeModalActive } from 'App/actions/ModalActions'
import { logout } from 'Member/actions/MemberActions'

import 'App/styles/AppBarLoginButton.scss'

class AppBarLoginButton extends Component {
  openLoginModal = () => {
    this.props.dispatch(changeModalActive('login', true));
  }

  dispatchLogout = () => {
    this.props.dispatch(logout());
  }

  render() {
    const callback = (this.props.member.status)? this.dispatchLogout : this.openLoginModal;
    const text = (this.props.member.status)? '登出' : '登入';
    return (
      <div className="login-button">
        <a onClick={callback} href="javascript:;" className="c-btn-border-opacity-04 c-btn btn-no-focus c-btn-header btn btn-sm c-btn-border-1x c-btn-dark c-btn-circle c-btn-uppercase c-btn-sbold">
          {text}
        </a>
      </div>
    )
  }
}

export default connect(state => ({
  member: state.member
}))(AppBarLoginButton);
