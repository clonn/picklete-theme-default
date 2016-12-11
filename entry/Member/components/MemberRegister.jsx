import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerMemberData } from 'Member/actions/MemberAction'
import zipCodeData from 'Checkout/constants/zipCodeData'

class MemberRegister extends Component {
  state = {
    email: '',
    password: '',
    passwordAgain: '',
    fullName: '',
    mobile: '',
    birthYear: '2000',
    birthMonth: '1',
    birthDay: '1',
    city: '台北市',
    region: '中正區',
    address: '',
    zipcode: '100'
  }

  handleMemberRegisterChange = (event) => {
    const eventTarget = event.target;
    const data = { [eventTarget.id]: eventTarget.value };
    this.setState(data);
  }

  handlerCityChange = (citys, event) => {
    const eventTarget = event.target;
    const zipCodes = citys[eventTarget.value];
    let city, region, zipcode;

    city = { [eventTarget.id]: eventTarget.value };
    region = { region: Object.keys(zipCodes)[0] };
    zipcode = { zipcode: zipCodes[region["region"]]};

    this.setState(city, () => {
      this.setState(region, () => {
        this.setState(zipcode)
      });
    });
  }

  handlerRegionChange = (regions, event) => {
    const eventTarget = event.target;
    let region, zipcode

    region = { [eventTarget.id]: eventTarget.value };
    zipcode = { zipcode: regions[eventTarget.value]};

    this.setState(region, () => {
      this.setState(zipcode)
    });
  }

  sendRegister = () => {
    const newMemberData = {
      email: this.state.email,
      password: this.state.password,
      passwordAgain: this.state.passwordAgain,
      fullName: this.state.fullName,
      mobile: this.state.mobile,
      birthYear: this.state.birthYear,
      birthMonth: this.state.birthMonth,
      birthDay: this.state.birthDay,
      city: this.state.city,
      region: this.state.region,
      address: this.state.address,
      zipcode: this.state.zipcode
    }

    this.props.dispatch(registerMemberData(newMemberData));
  }

  render() {
    const citys = Object.keys(zipCodeData);
    const regions = Object.keys(zipCodeData[this.state.city]);
    const zipcode = zipCodeData[this.state.city][this.state.region];

    return (
      <div className="container">
        <form>
          <h3>帳戶</h3>
          <div className="form-horizontal">
            <div className="form-group">
              <label htmlFor="email" className="col-sm-2 control-label">帳號</label>
              <div className="col-sm-10">
                <input value={this.state.email} id="email" type="text" className="form-control" placeholder="請填寫電子郵件信箱" onChange={this.handleMemberRegisterChange} required/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-2 control-label">密碼</label>
              <div className="col-sm-10">
                <input value={this.state.password} id="password" type="password" className="form-control" placeholder="請填入 8 - 12 位字元，含英文及數字" onChange={this.handleMemberRegisterChange} required/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="passwordAgain" className="col-sm-2 control-label">確認密碼</label>
              <div className="col-sm-10">
                <input value={this.state.passwordAgain} id="passwordAgain" type="password" className="form-control" placeholder="請再次輸入密碼" onChange={this.handleMemberRegisterChange} required/>
              </div>
            </div>
          </div>

          <h3>基本資料</h3>
          <div className="form-horizontal">
            <div className="form-group">
              <label htmlFor="fullName" className="col-sm-2 control-label">中文姓名</label>
              <div className="col-sm-10">
                <input value={this.state.fullName} id="fullName" type="text" className="form-control" placeholder="請填寫本名" onChange={this.handleMemberRegisterChange} required/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mobile" className="col-sm-2 control-label">手機號碼</label>
              <div className="col-sm-10">
                <input value={this.state.mobile} id="mobile" type="text" className="form-control" placeholder="請提供正確手機號碼，以供聯絡必要之用" onChange={this.handleMemberRegisterChange} required/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="birthYear" className="col-sm-2 control-label">生日</label>
              <div className="col-sm-3">
                <select value={this.state.birthYear} id="birthYear" className="form-control" onChange={this.handleMemberRegisterChange}>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                </select>
              </div>
              <div className="col-sm-3">
                <select value={this.state.birthMonth} id="birthMonth" className="form-control" onChange={this.handleMemberRegisterChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="col-sm-3">
                <select value={this.state.birthDay} id="birthDay" className="form-control" onChange={this.handleMemberRegisterChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address" className="col-sm-2 control-label">聯絡地址</label>
              <div className="col-sm-1">
                <input value={zipcode} id="zipcode" type="text" ref={(input) => this.zipcode = input}  className="form-control" readOnly/>
              </div>
              <div className="col-sm-2">
                <select value={this.state.city} id="city" className="form-control" onChange={this.handlerCityChange.bind(null, zipCodeData)}>
                  {citys.map((city, index) => (
                    <option value={city} key={index}>{city}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-2">
                <select value={this.state.region} id="region" className="form-control"onChange={this.handlerRegionChange.bind(null, zipCodeData[this.state.city])}>
                  {regions.map((region, index) => (
                    <option value={region} key={index}>{region}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-5">
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
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  member: state.user
}))(MemberRegister);

// <div className="col-sm-1">
//                 <input value={zipcode} id="zipcode" type="text" className="form-control" readOnly/>
//               </div>
