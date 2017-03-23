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

import i18n from 'i18next';
import i18nXhr from 'i18next-xhr-backend'
import { I18nextProvider } from 'react-i18next'

localStorage.locale = localStorage.locale || 'zh';

i18n.use(i18nXhr).init({
  lng: localStorage.locale,
  fallbackLng: 'zh',
  ns: [],
  defaultNS: '',
  debug: true,
  returnObjects: false,
  backend: {
    loadPath: (lngs, namespaces) => `/locales/${lngs[0]}/${namespaces[0]}.json`
  }
});

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
      <I18nextProvider i18n={i18n}>
        <Router children={routes} history={browserHistory}/>
      </I18nextProvider>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));
