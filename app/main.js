import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import getRoutes from './routes';

//test imports
import { fetchQuestions } from './util/api_util';

const store = configureStore(window.INITIAL_STATE);

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={getRoutes(store)}/>
    </Provider>,
    app
  );

  // tests
  window.fetchQuestions = fetchQuestions;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
