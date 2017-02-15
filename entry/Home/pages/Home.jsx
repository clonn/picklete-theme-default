import React, {PropTypes} from 'react'
import HomeMostPopularContainer from 'Home/containers/HomeMostPopularContainer'
import HomeAboutInfoContainer from 'Home/containers/HomeAboutInfoContainer'
import Helmet from "react-helmet"
import HomeSliderContainer from 'Home/containers/HomeSliderContainer'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Picklete"/>
        <HomeSliderContainer/>
        <HomeMostPopularContainer/>
        <HomeAboutInfoContainer/>
      </div>
    )
  }
}
