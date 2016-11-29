import React, { Component } from 'react'
import { connect } from 'react-redux'

import NotificationSystem from 'react-notification-system'
import { activateNotification, dismissNotification } from 'App/actions/NotificationActions'

class AppNotificationContainer extends Component {
  setRef = (ref) => this.notificationSystemRef = ref

  componentWillReceiveProps(nextProps) {
    if (this.props.notifications.newItem == null && nextProps.notifications.newItem) {
      this.notificationSystemRef.addNotification(nextProps.notifications.newItem);
      this.props.dispatch(activateNotification());
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.addNotification}>test</button>
        <NotificationSystem ref={this.setRef} />
      </div>
    )
  }
}

export default connect(state => ({notifications: state.notifications}))(AppNotificationContainer);
