// @flow
import React, { Component } from 'react';
import { AppContainer } from '!/containers';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from './redux';
import { LOGGING_OUT } from '!/redux/modules/authentication';

// All Of Our Reducers for the App
const appReducers = combineReducers(
	reducers
);


// Root Reducer "Middleware" for the app that can hijack actions and state
function rootReducer(state, action) {
	// If user is LOGGING_OUT then set the state to undefined.
	// This will pass undefined to all of our App Reducers and reset state to initial state
	if(action.type === LOGGING_OUT) {
		state = undefined;
	}

	// Return the App Reducers passing down the state and action
	return appReducers(state, action);
}

const store = createStore(
	rootReducer,
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