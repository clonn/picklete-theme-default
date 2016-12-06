import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import { login } from 'Member/actions/MemberAction'
import { changeModalActive} from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

import 'Member/styles/MemberLoginModal.scss'

class MemberLoginModal extends Component {
  state = {
    email: '',
    password: ''
  }

  closeModal = () => this.props.dispatch(changeModalActive('login', false))

  handleEmailChange = (event) => this.setState({email: event.target.value})
  handlePasswordChange = (event) => this.setState({password: event.target.value})

  handleLogin = () => {
    if (!this.state.email || !this.state.password) {
      this.props.dispatch(addNotification({
        title: '登入失敗',
        message: '請填寫會員 Email 與密碼',
        type: 'error'
      }));
      return;
    }
    this.props.dispatch(login({
      email: this.state.email,
      password: this.state.password,
    }))
  }

  render() {
    return (
      <div>
        {this.props.modals.login && !this.props.member.status && (
          <ModalContainer onClose={this.closeModal}>
            <ModalDialog onClose={this.closeModal} className="member-login-modal">
              <h1>登入會員</h1>
              <label className="control-label">Email</label>
              <input value={this.state.email} onChange={this.handleEmailChange} type="text" className="form-control c-square c-theme" placeholder="帳號"/>
              <label className="control-label">密碼</label>
              <input value={this.state.password} onChange={this.handlePasswordChange} type="password" className="form-control c-square c-theme" placeholder="密碼"/>
              <button onClick={this.handleLogin} type="submit" className="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">登入</button>
              <div className="modal-footer c-no-border">
                <span className="c-text-account">還沒註冊成會員？</span>
                <a href="/member/register" className="btn c-btn-dark-1 btn c-btn-uppercase c-btn-bold c-btn-slim c-btn-border-2x c-btn-square c-btn-signup">
                  註冊
                </a>
              </div>
            </ModalDialog>
          </ModalContainer>
        )}
      </div>
    )
  }
}

export default connect(state => ({
  modals: state.modals,
  member: state.member
}))(MemberLoginModal);
