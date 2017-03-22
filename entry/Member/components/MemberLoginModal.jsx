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
    this.props.dispatch(login({
      email: this.state.email,
      password: this.state.password,
    }))
  }

  handleLineLogin = () => {
    this.props.dispatch(login({
      authType: 'line'    
    }));
  }

  render() {
    const { lang } = this.props;
    return (
      <Dialog
        isOpen={this.props.modalActive && !this.props.member.status}
        type={DialogType.close}
        title={lang('登入會員')}
        onDismiss={this.closeModal}
        className="member-login-modal">
        <label className="control-label">{lang('Email')}</label>
        <input value={this.state.email} onChange={this.handleEmailChange} type="text" className="form-control c-square c-theme" placeholder={lang('Email')}/>
        <label className="control-label">{lang('密碼')}</label>
        <input value={this.state.password} onChange={this.handlePasswordChange} type="password" className="form-control c-square c-theme" placeholder={lang('密碼')}/>
        
        <div className="controls">
          <button onClick={this.handleLogin} type="submit" className="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">{lang('登入')}</button>
          <Link to="/member/register" onClick={this.closeModal} className="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">{lang('註冊')}</Link>
        </div>
        
        <div className="divider">
          <h5 className="divider-text">{lang('其他登入方式')}</h5>
          <hr/>
        </div>
        <div>
          <button className="social-btn" type="button" onClick={this.handleLineLogin}>
            <img className="logo" src={'https://static.line.naver.jp/line_regulation/files/ver2/LINE_Icon.png'} />
          </button>
        </div>
        
      </Dialog>
    );
  }
}

console.log(translate);
export default connect(state => ({
  modalActive: state.modals.login,
  member: state.member
}))(translate('Member/MemberLogin')(MemberLoginModal));
