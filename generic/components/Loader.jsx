import React, { Component } from 'react'
import classNames from 'classnames'

import 'generic/components/styles/Loader.scss'

export default class Loader extends Component {
  static defaultProps = {
    active: true
  }

  render() {
    return (
      <div className={classNames('loader', {active: this.props.active})}/>
    );
  }
}
