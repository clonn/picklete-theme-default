import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ShopDptListItem extends Component {

  render() {
    return (
      <li className={`c-dropdown ${(this.props.active)? 'c-active c-open' : ''}`}>
        <Link to={`/shop/department/${this.props.id}`} className="c-toggler">
          {this.props.name}
          <span className="c-arrow"></span>
        </Link>
        <ul className="c-dropdown-menu">
          {this.props.subDpts.map((subDpt, index) => (
            <li className={`${(subDpt.active)? 'c-active' : ''}`} key={index}>
              <Link to={`/shop/department/${this.props.id}/${subDpt.id}`}>{subDpt.name}</Link>
            </li>
          ))}
        </ul>
      </li>
    )
  }
}
