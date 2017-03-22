import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import { SplashContainer } from '!/containers';

export default class PomodoroNavigator extends Component {
	renderScene = (route, navigator) => {
		return <SplashContainer navigator={navigator}/>
	}
	configureScene = (route) => {

	}
	render() {
		return(
			<Navigator
				renderScene={this.renderScene}
				configureScene={this.configureScene}/>
		)
	}
}