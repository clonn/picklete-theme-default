import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeModalActive } from 'App/actions/ModalActions'
import { logout } from 'Member/actions/MemberActions'

class AppBarLoginButton extends Component {
  openLoginModal = () => {
    this.props.dispatch(changeModalActive('login', true));
  }

  dispatchLogout = () => {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <li>
        {(this.props.member.status)? (
          <div style={{marginTop: 16}}>
            {this.props.member.data.fullName}
            <a onClick={this.dispatchLogout} style={{marginLeft: 12}} href="javascript:;" className="c-btn-border-opacity-04 c-btn btn-no-focus c-btn-header btn btn-sm c-btn-border-1x c-btn-dark c-btn-circle c-btn-uppercase c-btn-sbold">
              登出
            </a>
          </div>
        ) : (
          <a onClick={this.openLoginModal} href="javascript:;" className="c-btn-border-opacity-04 c-btn btn-no-focus c-btn-header btn btn-sm c-btn-border-1x c-btn-dark c-btn-circle c-btn-uppercase c-btn-sbold">
            登入
          </a>
        )}

      </li>
    )
  }
}

export default connect(state => ({
  member: state.member
}))(AppBarLoginButton);
