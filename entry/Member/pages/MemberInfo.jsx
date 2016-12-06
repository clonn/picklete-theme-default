import React, { Component } from 'react'

export default class MemberRegister extends Component {
  render() {

    return (
      <div className="container">
        <h3>帳戶</h3>
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="account" className="col-sm-2 control-label">帳號</label>
            <div className="col-sm-10">
              <input value={this.state.account} id="account" type="text" className="form-control" placeholder="請填寫電子郵件信箱"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-2 control-label">密碼</label>
            <div className="col-sm-10">
              <input value={this.state.password} id="password" type="password" className="form-control" placeholder="請填入 8 - 12 位字元，含英文及數字"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password-confirm" className="col-sm-2 control-label">確認密碼</label>
            <div className="col-sm-10">
              <input value={this.state.passwordConfirm} id="password-confirm" type="password" className="form-control" placeholder="請再次輸入密碼" />
            </div>
          </div>
        </div>

        <h3>基本資料</h3>
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="name" className="col-sm-2 control-label">中文姓名</label>
            <div className="col-sm-10">
              <input value={this.state.name} id="name" type="text" className="form-control" placeholder="請填寫本名"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="col-sm-2 control-label">手機號碼</label>
            <div className="col-sm-10">
              <input value={this.state.mobile} id="mobile" type="text" className="form-control" placeholder="請提供正確手機號碼，以供聯絡必要之用"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="birth" className="col-sm-2 control-label">生日</label>
            <div className="col-sm-10">
              <input value={this.state.birth} id="birth" type="text" className="form-control" placeholder=""/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address" className="col-sm-2 control-label">聯絡地址</label>
            <div className="col-sm-10">
              <input value={this.state.address} id="address" type="text" className="form-control" placeholder="請輸入地址"/>
            </div>
          </div>
        </div>
        <div className="form-horizontal">
          <div className="form-group">
            <button type="button">
              取消填寫
            </button>
            <button type="button">
              申請會員
            </button>
          </div>
        </div>
      </div>
    );
  }
}
