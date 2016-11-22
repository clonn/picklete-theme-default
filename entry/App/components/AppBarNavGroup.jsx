import React, { Component } from 'react'

export default class AppBarNavGroup extends Component {
  render() {
    return (
      <li >
        <ul className="dropdown-menu c-menu-type-inline">
          <li>
            <h3>{this.props.title}</h3>
          </li>
          {this.props.children}
        </ul>
      </li>
    )
  }
}
