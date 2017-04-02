// @flow
import React, { Component } from 'react';
import { AppContainer } from '!/containers';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from './redux';

const store = createStore(
	combineReducers(
		reducers
	),
	compose(
		applyMiddleware(thunk),
		devToolsEnhancer()
	)
);

export default class PomodoroTut extends Component {
  render() {
    return (
    	<Provider store={store}>
        <AppContainer/>
	    </Provider>
    );
  }
}