import React, { Component } from 'react';
import { connect } from 'react-redux'
import Helmet from "react-helmet"

class AppDocumentTitleContainer extends Component {
  getDocumentTitle() {
    const title = _.flatMap(this.props.routes, (obj) => {
      if (obj.title) {
        return (typeof obj.title == 'function') ? obj.title(this.props.state, this.props.params) : obj.title;
      }
      return '';
    }).filter(e => e).join(' - ');
    return ((title)? `${title} / ` : '') + (this.props.state.company.data.name || '');
  }

  render() {
    return (
      <Helmet title={this.getDocumentTitle()}/>
    );
  }
}

export default connect(state => ({
  state: {
    member: state.member,
    company: state.company,
    products: state.products,
    dpts: state.dpts,
  }
}))(AppDocumentTitleContainer);