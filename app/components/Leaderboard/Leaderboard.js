import React, { PropTypes } from 'react';
import { View, Text, Platform } from 'react-native';
import { PomodoroNavbar, Hamburger } from '!/components';

export default function Leaderboard(props) {
	return (
		<View>
			<PomodoroNavbar
				leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer}/> : null}
				title="Leaderboard"/>
			<Text>Leaderboard Component</Text>
		</View>
	)
}

Leaderboard.propTypes = {
	openDrawer: PropTypes.func,
}