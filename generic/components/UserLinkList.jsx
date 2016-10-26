import React, { Component } from 'react'
import ListItem from 'generic/components/ListItem'

export default class UserLinkList extends Component {
  render() {
    return (
      <div className="user-link-list">
        {this.props.data.map((item, index) => (
          <ListItem externalUrl={item.externalUrl} target="_blank" key={index}>{item.text}</ListItem>
        ))}
      </div>
    );
  }
}
