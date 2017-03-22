import React, {Component} from 'react'
import { connect } from 'react-redux'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import AppBarNav from 'App/components/AppBarNav'
import { renderNavComplete } from 'App/actions/AppBarNavAction'

const navData = [{
  name: '訂單管理',
  url: '/member/orders'
}];

class AppBarNavMemberContainer extends Component {
  dispathRenderNavComplete = ({items}) => {
    this.props.dispatch(renderNavComplete({
      navType: 'member',
      items
    }));
  }

  render() {
    const { lang } = this.props;
    const navDataWithLang = navData.map(nav => ({
      ...nav,
      name: lang(nav.name)
    }))
    return (
      <DropdownButton
        title={lang('會員專區')}
        pullRight
        noCaret
        className="app-bar-nav">
        <AppBarNav 
          data={navDataWithLang} 
          width={180}
          dispathRenderNavComplete={this.dispathRenderNavComplete}/>
      </DropdownButton>
    );
  }
}

export default connect()(
  translate('App/AppBarNav')(AppBarNavMemberContainer)
);
