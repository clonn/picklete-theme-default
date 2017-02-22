import React, { Component } from 'react'

class Member extends Component {
  render () {
    return (
      <div>
        <div className="c-layout-breadcrumbs-1 c-subtitle c-fonts-uppercase c-fonts-bold c-bordered c-bordered-both">
          <div className="container">
            <div className="c-page-title c-pull-left">
              <h3 className="c-font-uppercase c-font-sbold">會員專區</h3>
            </div>
            <ul className="c-page-breadcrumbs c-theme-nav c-pull-right c-fonts-regular">
              <li>
                <a href="#">會員專區</a>
              </li>
              {/*<li>/</li>*/}
              <li className="c-state_active"></li>
            </ul>
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Member;
