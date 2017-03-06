import React, { Component } from 'react'
import Icon from 'generic/components/Icon'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
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
      <DropdownButton title={<span>{this.props.countNumber}</span>} open={this.props.open} onToggle={this.props.handleToggleDropdown} pullRight noCaret id="cart-dropdown">
        <AppBarCartBox
          totalPrice={this.props.totalPrice}
          data={this.props.data}
          closeDropdown={this.props.closeDropdown}
          goCheckout={this.props.goCheckout}
          dispatchRemoveCartItem={this.props.dispatchRemoveCartItem}/>
      </DropdownButton>
    );
  }
}
