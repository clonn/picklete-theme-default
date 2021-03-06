import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'
import { login } from 'Member/actions/MemberActions'
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
      authType: 'local',
      email: this.state.email,
      password: this.state.password,
    }))
  }

  handleLineLogin = () => {
    this.props.dispatch(login({
      authType: 'line',
      email: null,
      password: null,
    }))
  }

  render() {
    return (
      <Dialog
        isOpen={this.props.modalActive && !this.props.member.status}
        type={DialogType.close}
        title="登入會員"
        onDismiss={this.closeModal}
        className="member-login-modal">
        <label className="control-label">Email</label>
        <input value={this.state.email} onChange={this.handleEmailChange} type="text" className="form-control c-square c-theme" placeholder="帳號"/>
        <label className="control-label">密碼</label>
        <input value={this.state.password} onChange={this.handlePasswordChange} type="password" className="form-control c-square c-theme" placeholder="密碼"/>
        
        <div className="controls">
          <button onClick={this.handleLogin} type="submit" className="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">登入</button>
          <Link to="/member/register" onClick={this.closeModal} className="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">註冊</Link>
        </div>
        
        <div className="divider">
          <h5 className="divider-text">其他登入方式</h5>
          <hr/>
        </div>
        <div>
          <button className="social-btn" type="button" title="Line 登入" onClick={this.handleLineLogin}>
            <img className="logo" src={'https://static.line.naver.jp/line_regulation/files/ver2/LINE_Icon.png'} />
          </button>
        </div>
        
      </Dialog>
    );
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
                <Link to="/member/register" onClick={this.closeModal} className="btn c-btn-dark-1 btn c-btn-uppercase c-btn-bold c-btn-slim c-btn-border-2x c-btn-square c-btn-signup">
                  註冊
                </Link>
              </div>
              <div className="divider">
                <h5 className="divider-text">其他登入方式</h5>
                <hr/>
              </div>
              <div>
                <button className="social-btn" type="button" title="Line 登入" onClick={this.handleLineLogin}>
                  <img className="logo" src={'https://static.line.naver.jp/line_regulation/files/ver2/LINE_Icon.png'} />
                </button>
              </div>
            </ModalDialog>
          </ModalContainer>
        )}
      </div>
    )
  }
}

export default connect(state => ({
  modalActive: state.modals.login,
  member: state.member
}))(MemberLoginModal);
