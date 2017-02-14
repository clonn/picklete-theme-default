import React, { Component } from 'react';
import { connect } from 'react-redux'
import HomeSlider from 'Home/components/HomeSlider'
import { fetchSlidesAPI } from 'Home/actions/SliderActions'

class HomeSliderContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSlidesAPI());
  }
  
  render() {
    const { status, data } = this.props.slides;
    if (status == 'success') {
      return <HomeSlider slides={data}/>
    } else {
      return <div className="home-slider"/>
    }
    
  }
}

export default connect(state => ({slides: state.slides}))(HomeSliderContainer); ;