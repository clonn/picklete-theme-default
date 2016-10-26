import React, { Component } from 'react'
import 'generic/components/styles/Paragraph.scss'

export default class Paragraph extends Component {
  render() {
    return (
      <div className="paragraph">
        <div className="content" dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </div>
    );
  }
}
