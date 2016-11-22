import React, { Component } from 'react'
import Icon from 'generic/components/Icon'


export default class AppBarCartButton extends Component {
  render() {
    return (this.props.mobile) ? (
      <button className="c-cart-toggler" type="button" onClick={this.props.onClick}>
        <i className="icon-handbag"></i>
        <span className="c-cart-number c-theme-bg">{this.props.number}</span>
      </button>
    ) : (
      <li className="c-cart-toggler-wrapper">
        <a href="javascript:;" className="c-btn-icon c-cart-toggler" onClick={this.props.onClick}>
          <i className="icon-handbag c-cart-icon"></i>
          <span className="c-cart-number c-theme-bg">{this.props.number}</span>
        </a>
      </li>
    )
  }
}
