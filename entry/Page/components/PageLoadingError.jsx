import React, { Component } from 'react'
import ErrorRetryBox from 'generic/components/ErrorRetryBox'

import 'Page/styles/PageLoadingError.scss'

export default class PageLoadingError extends Component {
  static defaultProps = {
    bottom: false
  }

  render () {
    return (
      <div className={`page-loading-error ${(this.props.bottom)? 'bottom' : ''}`}>
        <ErrorRetryBox
          onRetry={this.props.onRetry}
          retryButtonBgColor="#58514a"
          retryButtonTextColor="#FFFFFF"/>
      </div>
    );
  }
}
