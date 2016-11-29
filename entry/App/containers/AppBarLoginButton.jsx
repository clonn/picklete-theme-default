import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeModalActive } from 'App/actions/ModalActions'

class AppBarLoginButton extends Component {
  openLoginModal = () => {
    this.props.dispatch(changeModalActive('login', true));
  }

  render() {
    return (
      <li>
        {(this.props.member.status)? (
          <div style={{marginTop: 30}}>{this.props.member.data.fullName}</div>
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
