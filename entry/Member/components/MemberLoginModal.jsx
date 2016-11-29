import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import { login } from 'Member/actions/MemberAction'
import { changeActive } from 'App/actions/ModalActions'

import 'Member/styles/MemberLoginModal.scss'

class MemberLoginModal extends Component {
  state = {
    email: 'admin',
    password: 'admin'
  }

  closeModal = () => {
    this.props.dispatch(changeActive('login', false));
  }

  handleEmailChange = (event) => this.setState({email: event.target.value})
  handlePasswordChange = (event) => this.setState({password: event.target.value})

  handleLogin = () => {

    this.props.dispatch(login({
      email: this.state.email,
      password: this.state.password,
    }));
    this.closeModal();
  }

  render() {
    return (
      <div>
        {this.props.modals.login && (
          <ModalContainer onClose={this.closeModal}>
            <ModalDialog onClose={this.closeModal} className="member-login-modal">
              <h1>登入會員</h1>
              <label className="control-label">帳號</label>
              <input value={this.state.email} onChange={this.handleEmailChange} type="text" className="form-control c-square c-theme" placeholder="帳號"/>
              <label className="control-label">密碼</label>
              <input value={this.state.password} onChange={this.handlePasswordChange} type="password" className="form-control c-square c-theme" placeholder="密碼"/>
              <button onClick={this.handleLogin} type="submit" className="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">登入</button>
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
