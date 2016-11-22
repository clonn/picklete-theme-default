import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AppBarNavGroupItem extends Component {
  render() {
    return (
      <li className={`${(this.props.active)? 'c-active' : ''}`}>
        <Link to={this.props.url}>{this.props.title}</Link>
      </li>
    )
  }
}
