import React, { Component } from 'react'
import ShopDptListItem from 'Shop/components/ShopDptListItem'

export default class ShopDptList extends Component {
  state = {
    mobileMenuActive: false
  }

  handleMenuToggle = () => {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive
    })
  }

  render() {
    const {mobileMenuActive} = this.state;
    return (
      <div className="c-layout-sidebar-menu c-theme ">
        <div className="c-sidebar-menu-toggler">
          <h3 className="c-title c-font-uppercase c-font-bold">商品分類</h3>
          <a className="c-content-toggler" onClick={this.handleMenuToggle}>
            <span className="c-line"></span>
            <span className="c-line"></span>
            <span className="c-line"></span>
          </a>
        </div>
        <ul className={`c-sidebar-menu collapse ${(mobileMenuActive)? 'in' : ''}`}>
          {this.props.data.map((dpt, index) => (
            <ShopDptListItem {...dpt} key={index}/>
          ))}
        </ul>
      </div>
    )
  }
}
