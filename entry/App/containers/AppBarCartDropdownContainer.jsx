import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBarCartDropdown from 'App/components/AppBarCartDropdown'

import { loadLocalStorage as loadCartLocalStorage, removeItem as removeCartItem } from 'Cart/actions/CartActions'


class AppBarCartDropdownContainer extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    this.props.dispatch(loadCartLocalStorage());
  }

  dispatchRemoveCartItem = (index) => {
    this.props.dispatch(removeCartItem(index));
  }

  handleToggleDropdown = (isOpen) => {
    this.setState({
      open: isOpen
    });
  }

  closeDropdown = () => {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <AppBarCartDropdown
        countNumber={this.props.cart.data.length}
        open={this.state.open}
        handleToggleDropdown={this.handleToggleDropdown}
        closeDropdown={this.closeDropdown}
        totalPrice={this.props.cart.totalPrice}
        data={this.props.cart.data}
        dispatchRemoveCartItem={this.dispatchRemoveCartItem}/>
    )
  }
}

export default connect(state => ({
  cart: state.cart
}))(AppBarCartDropdownContainer);
