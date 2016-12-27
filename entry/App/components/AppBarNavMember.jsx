import React, { Component } from 'react'
import AppBarNavSingle from 'App/components/AppBarNavSingle'
import AppBarNavSingleItem from 'App/components/AppBarNavSingleItem'

class AppBarNavMember extends Component {
  render () {
    return (
      <AppBarNavSingle title="會員專區">
        <AppBarNavSingleItem title="訂單管理" url={`/member/orders`} active/>
      </AppBarNavSingle>
    )
  }
}

export default AppBarNavMember;
