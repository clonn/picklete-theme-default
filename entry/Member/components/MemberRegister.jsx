import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

import DatePickerWithInputField from 'generic/components/DatePickerWithInputField'
import { registerMemberData } from 'Member/actions/MemberActions'
import { changeModalActive } from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

import zipCodeData from 'Checkout/constants/zipCodeData'

import 'Member/styles/MemberRegister.scss'

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
    zipcode: '100',
    birthDate: null,
    agreePolicy: false
  }

  handleMemberRegisterChange = (event) => {
    const eventTarget = event.target;
    const data = { [eventTarget.id]: eventTarget.value };
    this.setState(data);
  }

  handleBirthDayChange = (date) => {
    const momentDate = moment(date);
    this.setState({
      birthYear: momentDate.format('YYYY'), 
      birthMonth: momentDate.format('MM'), 
      birthDay: momentDate.format('DD'),
      birthDate: date
    });
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

  handleAgreePolicy = (e, checked) => {
    this.setState({
      agreePolicy: checked
    });
  }

  openTermsModal = () => {
    this.props.dispatch(changeModalActive('terms', true));
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

    if (!this.state.agreePolicy) {
      this.props.dispatch(addNotification({
        title: '會員條款',
        message: '請先閱讀並勾選同意會員條款',
        type: 'error'
      }));
      return;
    }

    this.props.dispatch(registerMemberData(newMemberData));
  }

  render() {
    const citys = Object.keys(zipCodeData);
    const regions = Object.keys(zipCodeData[this.state.city]);
    const zipcode = zipCodeData[this.state.city][this.state.region];

    return (
      <div className="container">
        <Helmet title="Picklete - 會員專區 - 註冊會員"/>        
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
            <div className="col-sm-10">
              <DatePickerWithInputField value={this.state.birthDate} onSelectDate={this.handleBirthDayChange}/>
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
          <div className="form-group">
            <label className="col-sm-2 control-label"></label>
            <div className="col-sm-10">
              <Checkbox className="policy-checkbox" checked={this.state.agreePolicy} onChange={this.handleAgreePolicy} />
              <div className="policy-text">我同意<span onClick={this.openTermsModal}>會員條款</span></div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label"></label>
            <div className="col-sm-10">
              <button type="button" className="btn btn-lg btn-default c-btn-square c-btn-uppercase c-btn-bold">
                取消填寫
              </button>
              <button type="button" className="btn btn-lg c-theme-btn c-btn-square c-btn-uppercase c-btn-bold" onClick={this.sendRegister}>
                申請會員
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  member: state.user
}))(MemberRegister);
