import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import AppBarNav from 'App/components/AppBarNav'
import AppBarNavGroup from 'App/components/AppBarNavGroup'
import AppBarNavGroupItem from 'App/components/AppBarNavGroupItem'

import handleDptData from 'Shop/modules/handleDptData'

class AppBarNavContainer extends Component {
  static contextTypes = {
    params: PropTypes.object.isRequired
  }
  render() {
    const dpts = handleDptData({
      activeDptID: this.context.params.dptID,
      activeSubDptID: this.context.params.subDptID,
      data: this.props.dpts.data
    });
    return (
      <AppBarNav title="商品訂購">
        {dpts.map((dpt, index) => (
          <AppBarNavGroup title={dpt.name} key={index}>
            {dpt.subDpts.map((subDpt, index2) => (
              <AppBarNavGroupItem title={subDpt.name} url={`/shop/department/${dpt.id}/${subDpt.id}`} active={subDpt.active} key={index2}/>
            ))}
          </AppBarNavGroup>
        ))}
      </AppBarNav>
    )
  }
}

export default connect(state => ({
  dpts: state.dpts
}))(AppBarNavContainer);
