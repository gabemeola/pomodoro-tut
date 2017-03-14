import React, { Component } from 'react';
import { View } from 'react-native';
import { PomodoroNavigator } from '~/containers';

export default class AppContainer extends Component {
	render() {
		return(
			<View style={{flex: 1}}>
				<PomodoroNavigator/>
			</View>
		)
	}
}