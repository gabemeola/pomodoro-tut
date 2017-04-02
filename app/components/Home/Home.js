import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PomodoroNavbar } from '!/components';

export default function Home(props) {
	return(
		<View>
			<PomodoroNavbar
				title="Home"/>
			<Text>Home</Text>
		</View>
	)
}