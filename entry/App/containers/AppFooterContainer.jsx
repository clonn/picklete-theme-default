import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppFooter from 'App/components/AppFooter'

class AppFooterContainer extends Component {
  
  render() {
    const { status, data } = this.props.company;
    if (status == 'success') {
      return <AppFooter company={data}/>
    } else {
      return <div/>
    }
  }
}

export default connect(state => ({company: state.company}))(AppFooterContainer); ;