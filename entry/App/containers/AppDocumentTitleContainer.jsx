import React, { Component } from 'react';
import { connect } from 'react-redux'
import Helmet from "react-helmet"

class AppDocumentTitleContainer extends Component {
  getDocumentTitle() {
    let title = _.last(this.props.routes).getTitle(this.props.state, this.props.params);
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