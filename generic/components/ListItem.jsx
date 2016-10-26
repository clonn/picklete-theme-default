import React, { Component } from 'react'
import { Link } from 'react-router'

import 'generic/components/styles/ListItem.scss'

export default class ListItem extends Component {
  static defaultProps = {
    className: '',
    target: '_blank'
  }
  render() {
    const component = (
      <div className={`${this.props.className} list-item`}>
        <div>{this.props.children}</div>
      </div>
    );

    if (this.props.url) {
      return (
        <Link to={this.props.url} className="list-item-wrap">
          {component}
        </Link>
      );
    } else if (this.props.externalUrl) {
      return (
        <a href={this.props.externalUrl} target={this.props.target} className="list-item-wrap">
          {component}
        </a>
      );
    } else {
      return (
        <div onClick={this.props.onClick} className="list-item-wrap">
          {component}
        </div>
      );
    }
  }
}
