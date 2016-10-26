import React, { Component } from 'react'
import Loader from 'generic/components/Loader'

import 'Page/styles/PageLoader.scss'

export default class PageLoader extends Component {
  static defaultProps = {
    bottom: false
  }

  render () {
    return (
      <div className={`page-loader ${(this.props.bottom)? 'bottom' : ''}`} style={this.props.style}>
        <Loader/>
      </div>
    );
  }
}
