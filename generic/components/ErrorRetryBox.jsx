import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import 'generic/components/styles/ErrorRetryBox.scss'

export default class ErrorRetryBox extends Component {
  static defaultProps = {
    errorText: '很抱歉，讀取發生錯誤',
    retryButtonText: '重試',
    retryButtonBgColor: '#58514a',
    retryButtonTextColor: '#FFFFFF',
    onRetry: () => {}
  }

  render() {
    return (
      <div className="error-retry-box">
        <p>{this.props.errorText}</p>
        <RaisedButton
          label={this.props.retryButtonText}
          backgroundColor={this.props.retryButtonBgColor}
          labelColor={this.props.retryButtonTextColor}
          onClick={this.props.onRetry}/>
      </div>
    );
  }
}
