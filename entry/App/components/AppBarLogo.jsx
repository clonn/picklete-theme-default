import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AppBarLogo extends Component {
  render() {
    return (
      <Link to="/" className="c-logo">
        <img src={this.props.img} alt="JANGO" className="c-desktop-logo"/>
        <img src={this.props.img} alt="JANGO" className="c-desktop-logo-inverse"/>
        <img src={this.props.img} alt="JANGO" className="c-mobile-logo"/>
      </Link>
    );
  }
}
