import React, { Component } from 'react';
import { connect } from 'react-redux'
import HomeAboutInfo from 'Home/components/HomeAboutInfo'
import { fetchSlidesAPI } from 'Home/actions/SliderActions'

class HomeAboutInfoContainer extends Component {
  render() {
    const { status, data } = this.props.company;
    if (status == 'success') {
      return <HomeAboutInfo company={data}/>
    } else {
      return <div/>
    }
    
  }
}

export default connect(state => ({company: state.company}))(HomeAboutInfoContainer); ;