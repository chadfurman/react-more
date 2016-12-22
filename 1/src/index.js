import 'babel-polyfill';

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Main from './app/components/presentation/main';

import App from './app/redux/app';

import './app/stylesheets/main.scss';

const store = createStore(App, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
