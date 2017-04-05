import React, { Component, PropTypes } from 'react';
import { Navigator, Platform } from 'react-native';
import { SplashContainer, FooterTabsContainer, SettingsContainer } from '!/containers';

export default class PomodoroNavigator extends Component {
	static propTypes = {
		isAuthed: PropTypes.bool.isRequired,
	}
	renderScene = (route, navigator) => {
		if(this.props.isAuthed === false) {
			return <SplashContainer navigator={navigator}/>
		} else if(route.settings === true) {
			return <SettingsContainer navigator={navigator}/>
		} else {
			return <FooterTabsContainer navigator={navigator}/>
		}
	}
	configureScene = (route) => {
		if(Platform.OS === 'android') {
			// On Android always Float From Bottom
			return Navigator.SceneConfigs.FloatFromBottomAndroid;
		}

		if(route.settings === true) {
			// Configure Settings Route to Transition from bottom
			return Navigator.SceneConfigs.FloatFromBottom;
		}

		// Default Transition is Float From Right
		return Navigator.SceneConfigs.FloatFromRight
	}
	render() {
		return(
			<Navigator
				initialRoute={{}}
				renderScene={this.renderScene}
				configureScene={this.configureScene}/>
		)
	}
}