import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import AppBarNav from 'App/components/AppBarNav'
import handleDptData from 'Shop/modules/handleDptData'
import { renderNavComplete } from 'App/actions/AppBarNavAction'

class AppBarNavShopContainer extends Component {
  static contextTypes = {
    params: PropTypes.object.isRequired,
  }

  static defaultProps = {
    mobile: false
  }

  state = {
    isDropdownOpend: false
  }

  handleToggleDropdown = (isOpen) => {
    this.setState({
      isDropdownOpend: isOpen
    });
  }

  dispathRenderNavComplete = ({items}) => {
    this.props.dispatch(renderNavComplete({
      navType: 'shop',
      items
    }));
  }

  render() {
    const dpts = handleDptData({
      activeDptID: this.context.params.dptID,
      activeSubDptID: this.context.params.subDptID,
      data: this.props.dpts.data
    });
    
    const data = dpts.map(dpt => ({
      name: dpt.name,
      // url: `/shop/department/${dpt.id}`,
      children: dpt.subDpts.map(subDpt => ({
        name: subDpt.name,
        url: `/shop/department/${dpt.id}/${subDpt.id}`
      }))
    }));

    return (
      <DropdownButton 
        title="商品訂購"
        open={this.state.isDropdownOpend} 
        onToggle={this.handleToggleDropdown} 
        pullRight
        noCaret
        className="app-bar-nav">
        <AppBarNav 
          data={data}
          width={230} 
          //handleToggleDropdown={this.handleToggleDropdown}
          dispathRenderNavComplete={this.dispathRenderNavComplete}/>
      </DropdownButton>
    );
  }
}

export default connect(state => ({
  dpts: state.dpts
}))(AppBarNavShopContainer);
