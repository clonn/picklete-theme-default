import React, { Component } from 'react'

export default class InnerHtml extends Component {
  render() {
    let props = Object.assign({}, this.props);
    delete props.html;
    return (
      <div {...props} dangerouslySetInnerHTML={{__html: this.props.html}}/>
    );
  }
}
