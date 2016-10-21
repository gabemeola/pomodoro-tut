import React, { PropTypes, Component } from 'react';
import { Navigator } from 'react-native';
import { SplashContainer } from '~/containers';

class PomodoroNavigator extends Component {
	renderScene = (route, navigator) => { // Using Arrow Function to negate the need for .bind()
		return <SplashContainer navigator={navigator} />
	};
	configureScene = (route) => {

	};
	render() {
		return (
			<Navigator
				renderScene={this.renderScene}
			  configureScene={this.configureScene}
			/>
		)
	}
}

export default PomodoroNavigator;