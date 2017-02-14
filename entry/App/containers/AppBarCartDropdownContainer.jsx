import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import AppBarCartDropdown from 'App/components/AppBarCartDropdown'

import { loadLocalStorage as loadCartLocalStorage, removeItem as removeCartItem } from 'Cart/actions/CartActions'
import { changeModalActive } from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

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

  goCheckout = () => {
    if (this.props.member.status) {
      this.closeDropdown();            
      browserHistory.push('/checkout/information');
    } else {
      this.closeDropdown();
      this.props.dispatch(changeModalActive('login', true));
      this.props.dispatch(addNotification({
        title: '請先登入',
        message: '請先登入再進行結帳',
        type: 'error'
      }));
    }
  }

  render() {
    return (
      <AppBarCartDropdown
        countNumber={this.props.cart.data.length}
        open={this.state.open}
        handleToggleDropdown={this.handleToggleDropdown}
        closeDropdown={this.closeDropdown}
        goCheckout={this.goCheckout}
        totalPrice={this.props.cart.totalPrice}
        data={this.props.cart.data}
        dispatchRemoveCartItem={this.dispatchRemoveCartItem}/>
    )
  }
}

export default connect(state => ({
  cart: state.cart,
  member: state.member
}))(AppBarCartDropdownContainer);
