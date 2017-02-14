import React, { PropTypes } from 'react'
import HomeMostPopularContainer from 'Home/containers/HomeMostPopularContainer'
import HomeAboutInfo from 'Home/components/HomeAboutInfo'
import HomeSliderContainer from 'Home/containers/HomeSliderContainer'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <HomeSliderContainer/>
        <HomeMostPopularContainer/>
        <HomeAboutInfo/>
      </div>
    )
  }
}
