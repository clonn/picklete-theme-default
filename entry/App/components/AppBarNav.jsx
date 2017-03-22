import React, { Component } from 'react'
import { Nav } from 'office-ui-fabric-react/lib/Nav'
import { Link, browserHistory } from 'react-router'
import { List, ListItem } from 'material-ui/List';
import 'App/styles/AppBarNav'

export default class AppBarNav extends Component {
  static defaultProps = {
    mobile: false
  }

  listItems = [];
  
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

  handleDirectRoute = (url) => {
    if (url) {
      browserHistory.push(url);
      document.getElementById('root').click();
      this.setState({
        opendItemIndex: null
      });
    }
  }

  componentDidMount() {
    this.props.dispathRenderNavComplete({
      items: this.listItems
    });
  }
  
  componentDidUpdate(prevProps) {
    this.props.dispathRenderNavComplete({
      items: this.listItems
    });
  }

  render() {
    this.listItems = (
      this.props.data.map(({name, url = '', children = []}, index) => (
        <ListItem 
          primaryText={name} 
          primaryTogglesNestedList
          //disabled={children.length > 0}
          onClick={() => this.handleDirectRoute(url)}
          open={this.state.opendItemIndex == index}
          onNestedListToggle={this.handleToggleItem}
          index={index}
          key={index}
          style={{cursor: 'pointer'}}
          nestedItems={children.map((childItem, index) => (
            <ListItem 
              key={index}
              primaryText={childItem.name} 
              onClick={() => this.handleDirectRoute(childItem.url)}
            />
          ))}
        />
      )
    ));

    return (
      <List style={{width: this.props.width}}>
        {this.listItems}
      </List>
    );
  }
}
