import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import callFetchAPIMiddleware from 'generic/modules/callFetchAPIMiddleware'
import rootReducer from 'root/rootReducer'

import { Route, Router, browserHistory} from 'react-router'
import routes from 'root/routes'

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(reduxThunk, callFetchAPIMiddleware),
);

window.store = store;

ReactDOM.render((
  <Provider store={store}>
    <Router children={routes} history={browserHistory}/>
  </Provider>
), document.getElementById('root'));
