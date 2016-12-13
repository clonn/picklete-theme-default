import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerMemberData } from 'Member/actions/MemberActions'


class MemberRegister extends Component {
  state = {
    account: '',
    password: '',
    passwordConfirm: '',
    name: '',
    mobile: '',
    birth: '',
    address: ''
  }

  handleMemberRegisterChange = (event) => {
    let data = {};
    const eventTarget = event.target;
    data[eventTarget.id] = eventTarget.value;
    this.setState(data);
  }

  sendRegister = () => {
    const newMemberData = {
      username: this.state.account,
      email: this.state.account,
      password: this.state.password,
      fullName: this.state.name,
      mobile: this.state.mobile,
      address: this.state.address
    }

    this.props.dispatch(registerMemberData(newMemberData));
  }

  render() {
    return (
      <div className="container">
        <h3>帳戶</h3>
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="account" className="col-sm-2 control-label">帳號</label>
            <div className="col-sm-10">
              <input value={this.state.account} id="account" type="text" className="form-control" placeholder="請填寫電子郵件信箱" onChange={this.handleMemberRegisterChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-2 control-label">密碼</label>
            <div className="col-sm-10">
              <input value={this.state.password} id="password" type="password" className="form-control" placeholder="請填入 8 - 12 位字元，含英文及數字" onChange={this.handleMemberRegisterChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirm" className="col-sm-2 control-label">確認密碼</label>
            <div className="col-sm-10">
              <input value={this.state.passwordConfirm} id="passwordConfirm" type="password" className="form-control" placeholder="請再次輸入密碼" onChange={this.handleMemberRegisterChange}/>
            </div>
          </div>
        </div>

        <h3>基本資料</h3>
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="name" className="col-sm-2 control-label">中文姓名</label>
            <div className="col-sm-10">
              <input value={this.state.name} id="name" type="text" className="form-control" placeholder="請填寫本名" onChange={this.handleMemberRegisterChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="col-sm-2 control-label">手機號碼</label>
            <div className="col-sm-10">
              <input value={this.state.mobile} id="mobile" type="text" className="form-control" placeholder="請提供正確手機號碼，以供聯絡必要之用" onChange={this.handleMemberRegisterChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="birth" className="col-sm-2 control-label">生日</label>
            <div className="col-sm-10">
              <input value={this.state.birth} id="birth" type="date" className="form-control" placeholder="" onChange={this.handleMemberRegisterChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address" className="col-sm-2 control-label">聯絡地址</label>
            <div className="col-sm-10">
              <input value={this.state.address} id="address" type="text" className="form-control" placeholder="請輸入地址" onChange={this.handleMemberRegisterChange}/>
            </div>
          </div>
        </div>
        <div className="form-horizontal">
          <div className="form-group">
            <button type="button" className="btn btn-lg btn-default c-btn-square c-btn-uppercase c-btn-bold">
              取消填寫
            </button>
            <button type="button" className="btn btn-lg c-theme-btn c-btn-square c-btn-uppercase c-btn-bold" onClick={this.sendRegister}>
              申請會員
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  member: state.member
}))(MemberRegister);
