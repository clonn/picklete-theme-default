import React, {PropTypes} from 'react'
import HomeMostPopularContainer from 'Home/containers/HomeMostPopularContainer'
import HomeAboutInfo from 'Home/components/HomeAboutInfo'
import Helmet from "react-helmet"

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Picklete"/>
        <HomeMostPopularContainer/>
        <HomeAboutInfo/>
      </div>
    )
  }
}
