import React, { Component } from 'react'
import classNames from 'classnames'
import InnerHtml from 'generic/components/InnerHtml'

import 'Shop/styles/ShopProductDetailTabs.scss'

export default class ShopProductDetailTabs extends Component {
  state = {
    activeTab: 0
  }

  handleChangeTab = (index) => {
    this.setState({
      activeTab: index
    });
  }

  render() {
    const tabs = [{
      title: '商品特色',
      content: this.props.characteristic
    }, {
      title: '商品規格',
      content: this.props.specification
    }];

    return (
      <div className="c-shop-product-tab-1" role="tabpanel">
        <div className="c-product-tab-container">
          <ul className="nav nav-justified" role="tablist">
            {tabs.map((tab, index) => (
              <li role="presentation" className={classNames({active: index == this.state.activeTab})} key={index}>
                <a className="c-font-uppercase c-font-bold" onClick={this.handleChangeTab.bind(null, index)}>{tab.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content">
          {tabs.map((tab, index) => (
            <div className={classNames('tab', {active: index == this.state.activeTab})} key={index}>
              <InnerHtml html={tab.content}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
