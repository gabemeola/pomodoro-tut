import React, { PropTypes, Component } from 'react';
import { Navigator } from 'react-native';

class PomodoroNavigator extends Component {
	renderScene = (route, navigator) => { // Using Arrow Function to negate the need for .bind()

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