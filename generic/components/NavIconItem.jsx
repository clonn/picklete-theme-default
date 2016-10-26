import React, { Component } from 'react'
import { Link } from 'react-router'
import FontIcon from 'material-ui/FontIcon'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import classNames from 'classnames'

import 'generic/components/styles/NavIconItem.scss'

export default class NavIconItem extends Component {
  static defaultProps = {
    buttonBgColor: '#58514a'
  }
  render() {
    const iconClassName = classNames({
      fa: this.props.iconClassName,
      [this.props.iconClassName]: this.props.iconClassName
    });

    const component = (
      <div className="nav-icon-item">
        <FloatingActionButton iconClassName={iconClassName} backgroundColor={this.props.buttonBgColor}>
          {(this.props.iconText)? <span className="icon-text">{this.props.iconText}</span>: ''}
        </FloatingActionButton>
        <div className="title">{this.props.text}</div>
      </div>
    );

    if (this.props.url) {
      return (
        <Link to={this.props.url} className="nav-icon-item-wrap">
          {component}
        </Link>
      );
    } else if (this.props.externalUrl) {
      return (
        <a href={this.props.externalUrl} target="_blank" className="nav-icon-item-wrap">
          {component}
        </a>
      );
    } else {
      return (
        <div className="nav-icon-item-wrap" onClick={this.props.onClick}>
          {component}
        </div>
      );
    }
  }
}
