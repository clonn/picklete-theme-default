import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import callFetchAPIMiddleware from 'generic/modules/callFetchAPIMiddleware'
import rootReducer from 'root/rootReducer'

import { Route, Router, browserHistory} from 'react-router'
import routes from 'root/routes'

import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin();

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(reduxThunk, callFetchAPIMiddleware),
);

window.listItems = [];
window.store = store;
ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <Router children={routes} history={browserHistory}/>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));
