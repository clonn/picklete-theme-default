import React, { Component } from 'react'
import { connect } from 'react-redux'

import EventDetail from 'Event/components/EventDetail'
import PageLoader from 'Page/components/PageLoader'
import PageLoadingError from 'Page/components/PageLoadingError'

import { fetchDetailAPI } from 'Event/actions/EventActions'

class EventDetailContainer extends Component {
  componentDidMount() {
    this.dispatchFetchDetailAPI();
  }

  dispatchFetchDetailAPI = () => {
    this.props.dispatch(fetchDetailAPI(this.props.params.id));
  }

  render() {
    const detail = this.props.events.details[this.props.params.id];
    if (!detail) {
      return <div/>
    }

    switch (detail.status) {
      case 'fetching':
        return <PageLoader/>
      case 'success':
        return <EventDetail {...detail.data}/>
      case 'error':
        return <PageLoadingError onRetry={this.dispatchFetchDetailAPI}/>
      default:
        return <div/>
    }
  }
}

export default connect(state => ({events: {details: state.events.details}}))(EventDetailContainer);
