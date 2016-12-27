import React, { Component } from 'react'
import { Link } from 'react-router'

class AppBarNavSingleItem extends Component {
  render () {
    return (
      <li className="dropdown-submenu">
        <Link to={this.props.url}>{this.props.title}
          <span className="c-arrow c-toggler"></span>
        </Link>
      </li>
    )
  }
}

export default AppBarNavSingleItem;
