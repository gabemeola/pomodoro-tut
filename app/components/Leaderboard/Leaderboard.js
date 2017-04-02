import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { PomodoroNavbar } from '!/components';

export default function Leaderboard(props) {
	return (
		<View>
			<PomodoroNavbar
				title="Leaderboard"/>
			<Text>Leaderboard Component</Text>
		</View>
	)
}