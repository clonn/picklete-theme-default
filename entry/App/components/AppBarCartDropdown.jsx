import React, { Component } from 'react'
import Icon from 'generic/components/Icon'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import AppBarCartBox from 'App/components/AppBarCartBox'

import 'App/styles/AppBarCartDropdown.scss'

export default class AppBarCartDropdown extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        open: false
      });
    }, 3000);
  }
  render() {
    return (
      <DropdownButton title={this.props.countNumber} open={this.props.open} onToggle={this.props.handleToggleDropdown} pullRight noCaret id="cart-dropdown">
        <AppBarCartBox
          totalPrice={this.props.totalPrice}
          data={this.props.data}
          closeDropdown={this.props.closeDropdown}
          dispatchRemoveCartItem={this.props.dispatchRemoveCartItem}/>
      </DropdownButton>
    );
    // return (this.props.mobile) ? (
    //   <button className="c-cart-toggler" type="button" onClick={this.props.onClick}>
    //     <i className="icon-handbag"></i>
    //     <span className="c-cart-number c-theme-bg">{this.props.number}</span>
    //   </button>
    // ) : (
    //   <li className="c-cart-toggler-wrapper">
    //     <a href="javascript:;" className="c-btn-icon c-cart-toggler" onClick={this.props.onClick}>
    //       <i className="icon-handbag c-cart-icon"></i>
    //       <span className="c-cart-number c-theme-bg">{this.props.number}</span>
    //     </a>
    //   </li>
    // )
  }
}
