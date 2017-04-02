import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import { SplashContainer, FooterTabsContainer } from '!/containers';

export default class PomodoroNavigator extends Component {
	static propTypes = {
		isAuthed: PropTypes.bool.isRequired,
	}
	renderScene = (route, navigator) => {
		return this.props.isAuthed === false
			? <SplashContainer navigator={navigator}/>
			: <FooterTabsContainer navigator={navigator}/>
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