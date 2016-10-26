import React, { Component } from 'react'
import 'generic/components/styles/ParagraphItem.scss'

export default class ParagraphItem extends Component {
  render() {
    return (
      <div className="paragraph-item">
        {(this.props.title)? (
          <h2>{this.props.title}</h2>
        ) : null}
        <div className="content" dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </div>
    );
  }
}
