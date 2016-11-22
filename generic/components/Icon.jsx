import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    return (
      <i className={`fa ${this.props.iconClassName}`} aria-hidden="true"/>
    )
  }
}
