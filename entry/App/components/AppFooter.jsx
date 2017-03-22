import React, { Component } from 'react'
import format from 'date-fns/format'

import 'App/styles/AppFooter.scss'

class AppFooter extends Component {
  handleLocaleChange = ({target}) => {
    this.props.i18n.changeLanguage(target.value);
    localStorage.locale = target.value;
  }
  render () {
    const { lang, company } = this.props;
    return (
      <footer className="c-layout-footer c-layout-footer-6 c-bg-grey-1">
        <div className="c-postfooter c-bg-dark-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 c-col">
                <select onChange={this.handleLocaleChange} value={localStorage.locale}>
                  <option value="zh">中文</option>
                  <option value="en">English</option>
                </select>
                <div className="footer-info">
                  <div className="address">{lang('地址')}：{company.address}</div>
                  <div className="phone">{lang('電話')}：{company.phone}</div>
                  <div className="copyright c-font-grey">{format(new Date, 'YYYY')} &copy; {company.fullname}
                    <span className="c-font-grey-3"> All Rights Reserved.</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default translate('App/AppFooter')(AppFooter);
