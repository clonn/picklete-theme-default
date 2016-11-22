import React, { Component } from 'react'

export default class AppBarNav extends Component {
  render() {
    return (
      <li>
        <a href="javascript:;" className="c-link dropdown-toggle">
          {this.props.title}
          <span className="c-arrow c-toggler"></span>
        </a>
        <ul className="dropdown-menu c-menu-type-mega c-menu-type-fullwidth">
          {this.props.children}
        </ul>
      </li>
    )
  }
}
