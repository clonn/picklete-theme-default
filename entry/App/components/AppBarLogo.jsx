import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AppBarLogo extends Component {
  render() {
    return (
      <Link to="/" className="logo">
        <img src={this.props.img}/>
      </Link>
    );
  }
}
