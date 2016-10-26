import React, { Component } from 'react'
import ParagraphItem from 'generic/components/ParagraphItem'
import 'generic/components/styles/ParagraphList.scss'

export default class ParagraphList extends Component {
  render() {
    return (
      <div className="paragraph-list">
        {this.props.data.map((item, index) => (
          <ParagraphItem title={item.title} content={item.content} key={index}/>
        ))}
      </div>
    )
  }
}
