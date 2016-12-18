import React, { PropTypes } from 'react'
import HomeMostPopularContainer from 'Home/containers/HomeMostPopularContainer'
import HomeAboutInfo from 'Home/components/HomeAboutInfo'

import {DropdownButton, MenuItem} from 'react-bootstrap'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <HomeMostPopularContainer/>
        <HomeAboutInfo/>
      </div>
    )
  }
}
