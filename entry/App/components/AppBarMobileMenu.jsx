import React, { Component } from 'react'
import { connect } from 'react-redux'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton'
import Icon from 'generic/components/Icon'
import AppBarNavShopContainer from 'App/containers/AppBarNavShopContainer'

import 'App/styles/AppBarMobileMenu.scss'

const styles = {
  color: '#69727c'
};

class AppBarMobileMenu extends Component {
  state = {
    isDropdownOpend: false,
    opendItemIndex: null
  }
  
  handleToggleItem = (listItem) => {
    if (this.state.opendItemIndex == listItem.props.index) {
      this.setState({
        opendItemIndex: null
      });
    } else {
      this.setState({
        opendItemIndex: listItem.props.index
      });
    }
  }

  render() {
    const { lang } = this.props;
    const navs = [{
      name: lang('商品訂購'),
      key: 'shop'
    }, {
      name: lang('會員專區'),
      key: 'member',
      shouldDisplay: () => this.props.isLogged
    }];
    
    return (
      <div className="mobile-menu">
        <DropdownButton 
          title={<Icon iconClassName="fa-bars"/>} 
          pullRight
          noCaret>
          <List style={{width: '100%'}} className="mobile-nav">
            {navs.filter(({shouldDisplay = () => true}) => shouldDisplay())
            .map(({name, key, url = ''}, index) => (
              <ListItem 
                primaryText={name} 
                primaryTogglesNestedList
                open={this.state.opendItemIndex == index}
                onNestedListToggle={this.handleToggleItem}
                index={index}
                key={index}
                style={{cursor: 'pointer'}}
                nestedItems={window.navItems[key]}
              />
            ))}
          </List>
        </DropdownButton>
      </div>
    );
  }
}

export default connect(state => ({
  isLogged: Boolean(state.member.status),
  navs: state.navs
}))(translate('App/AppBarNav')(AppBarMobileMenu));