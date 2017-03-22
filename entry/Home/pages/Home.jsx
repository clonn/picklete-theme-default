import React, {PropTypes} from 'react'
import HomeMostPopularContainer from 'Home/containers/HomeMostPopularContainer'
import HomeAboutInfoContainer from 'Home/containers/HomeAboutInfoContainer'
import HomeSliderContainer from 'Home/containers/HomeSliderContainer'

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeSliderContainer/>
        <HomeMostPopularContainer/>
        <HomeAboutInfoContainer/>
      </div>
    )
  }
}

export default Home
