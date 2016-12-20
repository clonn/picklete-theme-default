import React, { Component } from 'react'

class AppBarNavSingle extends Component {
  render () {
    return (
      <li className="c-menu-type-classic">
        <a href="javascript:;" className="c-link dropdown-toggle">{this.props.title}
          <span className="c-arrow c-toggler"></span>
        </a>
        <ul className="dropdown-menu c-menu-type-classic c-pull-left">
          {this.props.children}
        </ul>
      </li>
    )
  }
}

export default AppBarNavSingle;
