import React, { Component } from 'react'
import 'App/styles/AppFooter.scss'

class AppFooter extends Component {
  render () {
    const { company } = this.props;
    return (
      <footer className="c-layout-footer c-layout-footer-6 c-bg-grey-1">
        <div className="c-postfooter c-bg-dark-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 c-col">
                <div className="footer-info">
                  <div className="address">地址：{company.address}</div>
                  <div className="phone">電話：{company.phone}</div>
                  <div className="copyright c-font-grey">2017 &copy; {company.fullname}
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

export default AppFooter;
